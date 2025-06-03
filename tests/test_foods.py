import asyncio
from starlette.requests import Request
from starlette.responses import Response

from backend.app.routes import search_foods, SortBy


def test_search_foods_success():
    scope = {
        "type": "http",
        "method": "GET",
        "path": "/v1/foods",
        "query_string": b"",
        "headers": [],
        "client": ("test", 50000),
    }
    request = Request(scope)
    response = Response()

    result = asyncio.run(
        search_foods(
            request,
            response,
            query="broccoli",
            page=1,
            page_size=20,
            sort_by=SortBy.relevance,
            include_phytochemicals=True,
        )
    )

    assert len(result.items) > 0
    assert "X-RateLimit-Limit" in response.headers
    assert "X-RateLimit-Remaining" in response.headers
    assert "X-RateLimit-Reset" in response.headers
