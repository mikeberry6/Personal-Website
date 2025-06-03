from fastapi import APIRouter, HTTPException
from .data import FOODS


    if not query:
        raise HTTPException(status_code=400, detail="query is required")
    q = query.lower()
    results = [
        FoodSummary(id=f["id"], name=f["name"], thumb_url=f.get("thumb_url"))
        for f in FOODS
        if q in f["name"].lower()
    ]
    return results
    food = next((f for f in FOODS if f["id"] == food_id), None)
    if not food:
        raise HTTPException(status_code=404, detail="Food not found")
    return FoodProfile(id=food["id"], name=food["name"], nutrients=food["nutrients"])

    id_list = [int(i) for i in ids.split(",") if i.strip().isdigit()][:4]
    profiles = []
    for i in id_list:
        food = next((f for f in FOODS if f["id"] == i), None)
        if food:
            profiles.append(
                FoodProfile(
                    id=food["id"], name=food["name"], nutrients=food["nutrients"]
                )
            )
    if not profiles:
        raise HTTPException(status_code=404, detail="No foods found")
    return profiles
from .schemas import ErrorResponse, FoodProfile, FoodSummary, PaginatedFoods

router = APIRouter()

# In-memory store for rate limiting: {ip: deque[timestamps]}
_rate_limit_store: Dict[str, Deque[float]] = defaultdict(deque)
RATE_LIMIT = 50
WINDOW_SECONDS = 60

# Very small mock data set
MOCK_FOODS = [
    FoodSummary(id=1, name="Broccoli", thumbnail_url="https://example.com/broc.jpg"),
    FoodSummary(
        id=2, name="Broccoli sprouts", thumbnail_url="https://example.com/brocs.jpg"
    ),
    FoodSummary(id=3, name="Chia seed", thumbnail_url="https://example.com/chia.jpg"),
]


class SortBy(str):
    relevance = "relevance"
    calories = "calories"
    protein = "protein"
    polyphenol_score = "polyphenol_score"


QUERY_RE = re.compile(r"^[a-zA-Z0-9 \-]+$")


def _check_rate_limit(request: Request) -> Dict[str, str]:
    ip = request.client.host if request.client else "anonymous"
    bucket = _rate_limit_store[ip]
    now = time.time()
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


@router.get(
    "/v1/foods",
    response_model=PaginatedFoods,
    tags=["Foods"],
    summary="Search foods by name",
    description=(
        "Searches foods using both exact and fuzzy matching across common and "
        "scientific names. Results are sorted by relevance unless another sort "
        "field is provided. All nutrient values are returned per 100 g and the "
        "response is paginated using a page & page_size scheme."
    ),
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
    if not QUERY_RE.match(query):
        raise HTTPException(status_code=400, detail="Invalid characters in query")

    headers = _check_rate_limit(request)
    response.headers.update(headers)

    # naive search
    filtered = [f for f in MOCK_FOODS if query.lower() in f.name.lower()]
    total = len(filtered)
    if total == 0:
        raise HTTPException(status_code=404, detail="No foods found")

    start = (page - 1) * page_size
    end = start + page_size
    items = filtered[start:end]

    next_page = None
    if end < total:
        next_page = f"/v1/foods?query={query}&page={page + 1}&page_size={page_size}"

    return PaginatedFoods(total_count=total, next_page=next_page, items=items)


@router.get("/foods/{food_id}/profile", response_model=FoodProfile, tags=["Foods"])
def get_food_profile(food_id: int):
    """Return a nutrient profile for a given food."""
    return FoodProfile(
        id=food_id,
        name="Example",
        macros={},
        micronutrients={},
        phytochemicals=None,
        citations={},
    )


@router.get("/compare", response_model=List[FoodProfile], tags=["Foods"])
def compare_foods(ids: str):
    """Compare up to 4 foods."""
    return []
