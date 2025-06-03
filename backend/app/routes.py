"""API route handlers for the Nutrient Profile App."""

from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Response
from pydantic import Field

from .data import SAMPLE_FOODS, search_foods
from .schemas import (
    ErrorResponse,
    FoodProfile,
    FoodSummary,
    PaginatedFoods,
    SortBy,
)
from .utils import rate_limiter


router = APIRouter()


@router.get(
    "/v1/foods",
    response_model=PaginatedFoods,
    tags=["Foods"],
    summary="Search foods by name",
    description=(
        "Search for foods using fuzzy matching. Results are sorted by relevance by"
        " default. Nutrient values are expressed per 100 g. Pagination is based on"
        " page and page_size parameters."
    ),
    responses={
        400: {"model": ErrorResponse},
        404: {"model": ErrorResponse},
        429: {"model": ErrorResponse},
    },
)
def search_foods(
    *,
    query: str = Field(..., min_length=2, max_length=60, pattern=r"^[a-zA-Z0-9 \-]+$"),
    page: int = Field(1, ge=1, le=100),
    page_size: int = Field(20, ge=1, le=100),
    sort_by: SortBy = SortBy.relevance,
    include_phytochemicals: bool = True,
    response: Response,
    rate_headers: dict = Depends(rate_limiter),
):
    results = search_foods(query)
    if not results:
        raise HTTPException(status_code=404, detail="No foods found")

    start = (page - 1) * page_size
    end = start + page_size
    items = [FoodSummary(**f) for f in results[start:end]]
    total_count = len(results)

    next_page: Optional[str] = None
    if end < total_count:
        next_page = f"/v1/foods?query={query}&page={page + 1}&page_size={page_size}"

    payload = PaginatedFoods(total_count=total_count, next_page=next_page, items=items)
    for k, v in rate_headers.items():
        response.headers[k] = v
    return payload


@router.get(
    "/foods/{food_id}/profile",
    response_model=FoodProfile,
    tags=["Foods"],
    responses={404: {"model": ErrorResponse}},
)
def get_food_profile(
    food_id: int, response: Response, rate_headers: dict = Depends(rate_limiter)
):
    for f in SAMPLE_FOODS:
        if f["id"] == food_id:
            profile = FoodProfile(
                id=f["id"],
                name=f["name"],
                nutrients=f["nutrients"],
            )
            for k, v in rate_headers.items():
                response.headers[k] = v
            return profile
    raise HTTPException(status_code=404, detail="Food not found")


@router.get(
    "/compare",
    response_model=List[FoodProfile],
    tags=["Foods"],
)
def compare_foods(
    ids: str, response: Response, rate_headers: dict = Depends(rate_limiter)
):
    id_list = [int(i) for i in ids.split(",") if i.isdigit()][:4]
    profiles = []
    for food_id in id_list:
        for f in SAMPLE_FOODS:
            if f["id"] == food_id:
                profiles.append(
                    FoodProfile(
                        id=f["id"],
                        name=f["name"],
                        nutrients=f["nutrients"],
                    )
                )
    for k, v in rate_headers.items():
        response.headers[k] = v
    return profiles
