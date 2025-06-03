from enum import Enum
from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field


class SortBy(str, Enum):
    relevance = "relevance"
    calories = "calories"
    protein = "protein"
    polyphenol_score = "polyphenol_score"


class FoodSummary(BaseModel):
    id: int = Field(..., example=1)
    name: str = Field(..., example="Broccoli")
    thumbnail_url: Optional[str] = Field(
        None, example="https://example.com/broccoli.jpg"
    )


class FoodProfile(BaseModel):
    id: int = Field(..., example=1)
    name: str = Field(..., example="Broccoli")
    nutrients: Dict[str, Any] = Field(
        example={
            "calories": 34,
            "protein": 2.8,
            "vitamin_c_mg": 89.2,
            "polyphenol_score": 80,
        }
    )


class PaginatedFoods(BaseModel):
    total_count: int = Field(..., example=2)
    next_page: Optional[str] = Field(None, example="/v1/foods?query=bro&page=2")
    items: List[FoodSummary] = Field(
        example=[
            {
                "id": 1,
                "name": "Broccoli",
                "thumbnail_url": "https://example.com/broccoli.jpg",
            }
        ]
    )


class ErrorResponse(BaseModel):
    code: int = Field(..., example=404)
    message: str = Field(..., example="Food not found")
