from __future__ import annotations

from typing import Dict, List, Optional, Tuple

from pydantic import BaseModel, Field, HttpUrl


class FoodSummary(BaseModel):
    """Minimal information returned in search results."""

    id: int = Field(..., example=1)
    name: str = Field(..., example="Broccoli sprouts")
    thumbnail_url: Optional[HttpUrl] = Field(
        None,
        example="https://cdn.nutrientapp.io/broccoli.jpg",
    )


class FoodProfile(BaseModel):
    """Detailed nutrient profile for a food."""

    id: int = Field(..., example=1)
    name: str = Field(..., example="Broccoli sprouts")
    macros: Dict[str, float] = Field(
        ...,
        example={"protein_g": 3.5, "fat_g": 0.4, "carbs_g": 5.1},
    )
    micronutrients: Dict[str, float] = Field(
        ...,
        example={"vitamin_c_mg": 89.2, "iron_mg": 0.7},
    )
    phytochemicals: Optional[Dict[str, float]] = Field(
        None,
        example={"sulforaphane_mg": 73.1},
    )
    citations: Dict[str, str] = Field(
        ...,
        example={"vitamin_c_mg": "USDA FDC 2025"},
    )
    confidence_interval: Optional[Tuple[float, float]] = Field(
        None,
        example=(70.0, 76.0),
    )


class PaginatedFoods(BaseModel):
    """Paginated response for food search."""

    total_count: int = Field(..., example=2)
    next_page: Optional[str] = Field(
        None,
        example=(
            "https://api.nutrientapp.io/v1/foods?"
            "query=broccoli&page=2"
        ),
    )
    items: List[FoodSummary] = Field(
        ...,
        example=[
            FoodSummary.parse_obj(
                {
                    "id": 1,
                    "name": "Broccoli sprouts",
                    "thumbnail_url": (
                        "https://cdn.nutrientapp.io/broccoli.jpg"
                    ),
                }
            )
        ],
    )


class ErrorResponse(BaseModel):
    code: int = Field(..., example=404)
    message: str = Field(..., example="Food not found")