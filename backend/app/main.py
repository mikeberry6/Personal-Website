from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes import router


tags_metadata = [
    {"name": "Foods", "description": "Operations for food search and retrieval."},
    {"name": "Meta", "description": "Service metadata and health checks."},
]

app = FastAPI(
    title="Nutrient Profile API",
    version="v1.0.0",
    description=(
        "API providing detailed macro, micronutrient and phytochemical profiles "
        "for common foods."
    ),
    contact={"email": "support@nutrientapp.io"},
    license_info={"name": "MIT"},
    openapi_tags=tags_metadata,
)

origins = ["https://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/healthcheck", tags=["Meta"])
def healthcheck():
    return {"status": "ok"}
