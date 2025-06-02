from pydantic import BaseModel
from typing import Dict, Any

class FoodSummary(BaseModel):
    id: int
    name: str
    thumb_url: str | None = None

class FoodProfile(BaseModel):
    id: int
    name: str
    nutrients: Dict[str, Any]
