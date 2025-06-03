"""
Entry-point for the Nutrient Profile API.

* Creates the FastAPI app with CORS and tagged OpenAPI metadata.
* Mounts the “Foods” router defined in routes.py.
* Exposes /healthcheck for uptime pings.
"""

from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes import router  # local import, after 3-rd-party imports OK

TAGS_METADATA = [
    {
        "name": "Foods",
        "description": "Operations for food search and retrieval.",
    },
    {
        "name": "Meta",
        "description": "Service metadata and health checks.",
    },
]

app: FastAPI = FastAPI(
    title="Nutrient Profile API",
    version="v1.0.0",
    description=(
        "API providing detailed macro-, micro- and phytochemical profiles for "
        "common foods."
    ),
    contact={"email": "support@nutrientapp.io"},
    license_info={"name": "MIT"},
    openapi_tags=TAGS_METADATA,
)

# CORS — allow the local Next.js dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the foods router (v1/… endpoints)
app.include_router(router)


@app.get("/healthcheck", tags=["Meta"], summary="Simple uptime check")
def healthcheck() -> dict[str, str]:
    """Return 200/OK so external monitors know the service is alive."""
    return {"status": "ok"}