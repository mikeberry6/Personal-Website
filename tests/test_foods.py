from fastapi.testclient import TestClient

from backend.app import app


client = TestClient(app)


def test_search_foods():
    response = client.get("/v1/foods", params={"query": "broccoli", "page": 1})
    assert response.status_code == 200
    data = response.json()
    assert "items" in data
    assert any(item["name"] == "Broccoli" for item in data["items"])
    assert "X-RateLimit-Limit" in response.headers
