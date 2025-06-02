from fastapi import APIRouter
from .schemas import FoodProfile, FoodSummary

router = APIRouter()

@router.get("/foods", response_model=list[FoodSummary])
def search_foods(query: str):
    """Search for foods by name."""
    # TODO: integrate OpenSearch / database
    return []


@router.get("/foods/{food_id}/profile", response_model=FoodProfile)
def get_food_profile(food_id: int):
    """Return a nutrient profile for a given food."""
    # TODO: fetch nutrient data from PostgreSQL
    return FoodProfile(id=food_id, name="Example", nutrients={})


@router.get("/compare", response_model=list[FoodProfile])
def compare_foods(ids: str):
    """Compare up to 4 foods."""
    # TODO: implement compare logic
    return []
