from fastapi.testclient import TestClient

from backend.app.main import app

client = TestClient(app)


def test_search_foods_success():
    response = client.get("/v1/foods", params={"query": "broccoli", "page": 1})
    assert response.status_code == 200
    data = response.json()
    assert "items" in data
    assert isinstance(data["items"], list)
    assert "X-RateLimit-Limit" in response.headers
    assert "X-RateLimit-Remaining" in response.headers
    assert "X-RateLimit-Reset" in response.headers
