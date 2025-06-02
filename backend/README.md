# Backend API

This directory contains a basic FastAPI skeleton for the Nutrient Profile App.

## Development

1. Install dependencies (Python 3.12 recommended):
   ```bash
   pip install -r requirements.txt
   ```
2. Run the API locally:
   ```bash
   uvicorn app.main:app --reload
   ```

The API exposes endpoints described in the Product Requirements Document:
- `GET /foods?query=`
- `GET /foods/{id}/profile`
- `GET /compare?ids=...`
- `GET /healthcheck`

All endpoints currently return placeholder data.
