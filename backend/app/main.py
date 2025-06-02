from fastapi import FastAPI
from .routes import router

app = FastAPI(title="Nutrient Profile App", version="0.1")

app.include_router(router)


@app.get("/healthcheck")
def healthcheck():
    return {"status": "ok"}
