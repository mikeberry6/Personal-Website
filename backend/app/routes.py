from __future__ import annotations

import re
import time
from collections import defaultdict, deque
from typing import Deque, Dict, List

from fastapi import APIRouter, HTTPException, Query, Request, Response

from .data import FOODS
from .schemas import ErrorResponse, FoodProfile, FoodSummary, PaginatedFoods

router = APIRouter(tags=["Foods"])

# ──────────────────────────────
# Mock data (until DB is wired up)
# ──────────────────────────────
MOCK_FOODS = [
    FoodSummary(
        id=1,
        name="Broccoli",
        thumbnail_url="https://example.com/broc.jpg",
    ),
    FoodSummary(
        id=2,
        name="Broccoli sprouts",
        thumbnail_url="https://example.com/brocs.jpg",
    ),
    FoodSummary(
        id=3,
        name="Chia seed",
        thumbnail_url="https://example.com/chia.jpg",
    ),
]

# ──────────────────────────────
#            Rate limiting
# ──────────────────────────────
_rate_limit_store: Dict[str, Deque[float]] = defaultdict(deque)
RATE_LIMIT = 50
WINDOW_SECONDS = 60


def _check_rate_limit(request: Request) -> Dict[str, str]:
    """Simple sliding-window IP rate-limiter."""
    ip = request.client.host if request.client else "anonymous"
    bucket = _rate_limit_store[ip]
    now = time.time()

    # Drop timestamps outside the 60-s window
    while bucket and now - bucket[0] > WINDOW_SECONDS:
        bucket.popleft()

    if len(bucket) >= RATE_LIMIT:
        reset_in = WINDOW_SECONDS - (now - bucket[0])
        raise HTTPException(
            status_code=429,
            detail="Rate limit exceeded",
            headers={"Retry-After": str(int(reset_in))},
        )

    bucket.append(now)
    remaining = RATE_LIMIT - len(bucket)
    reset_at = int(now + WINDOW_SECONDS - (bucket[0] if bucket else now))
    return {
        "X-RateLimit-Limit": str(RATE_LIMIT),
        "X-RateLimit-Remaining": str(remaining),
        "X-RateLimit-Reset": str(reset_at),
    }


# ──────────────────────────────
#            Validators
# ──────────────────────────────
QUERY_RE = re.compile(r"^[a-zA-Z0-9 \-]+$")


class SortBy(str):
    """Permitted sort keys returned to the client."""

    relevance = "relevance"
    calories = "calories"
    protein = "protein"
    polyphenol_score = "polyphenol_score"


# ──────────────────────────────
#           Endpoints
# ──────────────────────────────
@router.get(
    "/v1/foods",
    response_model=PaginatedFoods,
    summary="Search foods by name",
    responses={
        400: {"model": ErrorResponse},
        404: {"model": ErrorResponse},
        429: {"model": ErrorResponse},
    },
)
async def search_foods(  # noqa: D401
    request: Request,
    response: Response,
    query: str = Query(..., min_length=2, max_length=60),
    page: int = Query(1, ge=1, le=100),
    page_size: int = Query(20, ge=1, le=100),
    sort_by: SortBy = Query(SortBy.relevance),
    include_phytochemicals: bool = Query(True),
) -> PaginatedFoods:
    """
    Search ``MOCK_FOODS`` with a naïve substring match.

    A real implementation will query a DB or external API.
    """
    if not QUERY_RE.match(query):
        raise HTTPException(status_code=400, detail="Invalid characters in query")

    response.headers.update(_check_rate_limit(request))

    filtered = [f for f in MOCK_FOODS if query.lower() in f.name.lower()]
    if not filtered:
        raise HTTPException(status_code=404, detail="No foods found")

    total = len(filtered)
    start = (page - 1) * page_size
    end = start + page_size
    items = filtered[start:end]

    next_page: str | None = None
    if end < total:
        next_page = (
            "/v1/foods?"
            f"query={query}&page={page + 1}&page_size={page_size}"
        )

    return PaginatedFoods(total_count=total, next_page=next_page, items=items)


@router.get(
    "/foods/{food_id}/profile",
    response_model=FoodProfile,
    summary="Return nutrient profile for a single food",
)
def get_food_profile(food_id: int) -> FoodProfile:
    """Return macro, micro & phytochemical profile for *food_id*."""
    food = next((f for f in FOODS if f["id"] == food_id), None)
    if not food:
        raise HTTPException(status_code=404, detail="Food not found")

    return FoodProfile(
        id=food["id"],
        name=food["name"],
        nutrients=food["nutrients"],
    )


@router.get(
    "/compare",
    response_model=List[FoodProfile],
    summary="Compare up to 4 foods by id",
)
def compare_foods(
    ids: str = Query(..., description="Comma-separated list of up to 4 ids"),
) -> List[FoodProfile]:
    """Return side-by-side nutrient profiles for up to four foods."""
    id_list = [int(i) for i in ids.split(",") if i.strip().isdigit()][:4]

    profiles: list[FoodProfile] = []
    for food_id in id_list:
        food = next((f for f in FOODS if f["id"] == food_id), None)
        if food:
            profiles.append(
                FoodProfile(
                    id=food["id"],
                    name=food["name"],
                    nutrients=food["nutrients"],
                ),
            )

    if not profiles:
        raise HTTPException(status_code=404, detail="No foods found")

    return profiles