"""FastAPI application setup for the Nutrient Profile API."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes import router

tags_metadata = [
    {
        "name": "Foods",
        "description": "Operations related to food search and retrieval.",
    },
    {
        "name": "Meta",
        "description": "Health and metadata endpoints.",
    },
]

app = FastAPI(
    title="Nutrient Profile API",
    version="v1.0.0",
    description="""API providing nutrient and phytochemical profiles for foods.""",
    contact={"email": "support@nutrientapp.io"},
    license_info={"name": "MIT"},
    openapi_tags=tags_metadata,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/healthcheck")
def healthcheck():
    return {"status": "ok"}
