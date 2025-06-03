# Nutrient Profile App

This repository contains a minimal skeleton implementing the core pieces of the Nutrient Profile App as outlined in the PRD.

## Structure

- `backend/` – FastAPI application exposing REST endpoints.
- `frontend/` – Next.js application serving the user interface.

Both projects are intentionally lightweight and use a small in-memory dataset for demonstration.

## Getting Started

1. Install Python dependencies and run the API (see `backend/README.md`).
2. Install Node dependencies in `frontend/` and start the development server:
   ```bash
   cd frontend
   npm install  # requires internet access
   npm run dev
   ```

Set `NEXT_PUBLIC_API_URL` in `.env.local` to the backend URL (e.g., `http://localhost:8000`).
The frontend expects the backend to be running on the same host by default.
