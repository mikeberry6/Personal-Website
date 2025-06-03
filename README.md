# Nutrient Profile App

This repository contains a minimal skeleton implementing the core pieces of the Nutrient Profile App as outlined in the PRD.

## Structure

- `backend/` – FastAPI application exposing REST endpoints.
- `frontend/` – Next.js application serving the user interface.


Both projects are intentionally lightweight and contain placeholder logic only.


## Getting Started

1. Install Python dependencies and run the API (see `backend/README.md`).
2. Install Node dependencies in `frontend/` and start the development server:
   ```bash
   cd frontend
   npm install  # requires internet access
   npm run dev
   ```

> **⚠ Offline CI / Codespaces**
> The workspace that runs our automated tests has **no Internet access**.
> Before running the Next.js frontend there you must provide `node_modules`
> yourself:
>
> 1. Clone locally on a computer with Internet access  
>    ```bash
>    cd frontend
>    npm ci           # or: npm install
>    ```
> 2. Zip the entire `frontend/node_modules` folder.
> 3. Upload (or commit) that zip into the workspace.  
>    Once unpacked, `npm run dev` works offline and CI passes.

The frontend expects the backend to be running on the same host.

