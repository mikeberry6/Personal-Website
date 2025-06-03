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
    FoodSummary(id=1, name="Broccoli", thumbnail_url="https://example.com/broc.jpg"),
    FoodSummary(id=2, name="Broccoli sprouts", thumbnail_url="https://example.com/brocs.jpg"),
    FoodSummary(id=3, name="Chia seed", thumbnail_url="https://example.com/chia.jpg"),
]

# ──────────────────────────────
#            Rate limiting
# ──────────────────────────────
_rate_limit_store: Dict[str, Deque[float]] = defaultdict(deque)
RATE_LIMIT = 50
WINDOW_SECONDS = 60


def _check_rate_limit(request: Request) -> Dict[str, str]:
    ip = request.client.host if request.client else "anonymous"
    bucket = _rate_limit_store[ip]
    now = time.time()

    # remove timestamps outside the sliding window
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
async def search_foods(
    request: Request,
    response: Response,
    query: str = Query(..., min_length=2, max_length=60),
    page: int = Query(1, ge=1, le=100),
    page_size: int = Query(20, ge=1, le=100),
    sort_by: SortBy = Query(SortBy.relevance),
    include_phytochemicals: bool = Query(True),
):
    """Search for foods using naïve substring matching against `MOCK_FOODS`."""
    if not QUERY_RE.match(query):
        raise HTTPException(status_code=400, detail="Invalid characters in query")

    response.headers.update(_check_rate_limit(request))

    filtered = [f for f in MOCK_FOODS if query.lower() in f.name.lower()]
    if not filtered:
        raise HTTPException(status_code=404, detail="No foods found")

    total = len(filtered)
    start, end = (page - 1) * page_size, (page - 1) * page_size + page_size
    items = filtered[start:end]

    next_page = (
        f"/v1/foods?query={query}&page={page + 1}&page_size={page_size}"
        if end < total
        else None
    )

    return PaginatedFoods(total_count=total, next_page=next_page, items=items)


@router.get("/foods/{food_id}/profile", response_model=FoodProfile)
def get_food_profile(food_id: int):
    """Return nutrient profile for a given food."""
    food = next((f for f in FOODS if f["id"] == food_id), None)
    if not food:
        raise HTTPException(status_code=404, detail="Food not found")

    return FoodProfile(id=food["id"], name=food["name"], nutrients=food["nutrients"])


@router.get("/compare", response_model=List[FoodProfile])
def compare_foods(ids: str = Query(..., description="Comma-separated list of up to 4 ids")):
    """Compare up to 4 foods by ID."""
    id_list = [int(i) for i in ids.split(",") if i.strip().isdigit()][:4]

    profiles: list[FoodProfile] = []
    for i in id_list:
        food = next((f for f in FOODS if f["id"] == i), None)
        if food:
            profiles.append(
                FoodProfile(id=food["id"], name=food["name"], nutrients=food["nutrients"])
            )

    if not profiles:
        raise HTTPException(status_code=404, detail="No foods found")

    return profiles