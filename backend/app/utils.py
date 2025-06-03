import time
from fastapi import HTTPException, Request, status

RATE_LIMIT = 50
WINDOW = 60.0
rate_limit_store: dict[str, tuple[int, float]] = {}


def rate_limiter(request: Request):
    client_ip = request.client.host
    count, reset = rate_limit_store.get(client_ip, (0, time.time() + WINDOW))
    now = time.time()
    if now > reset:
        count = 0
        reset = now + WINDOW
    if count >= RATE_LIMIT:
        headers = {
            "Retry-After": str(int(reset - now)),
            "X-RateLimit-Limit": str(RATE_LIMIT),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": str(int(reset)),
        }
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Rate limit exceeded",
            headers=headers,
        )
    rate_limit_store[client_ip] = (count + 1, reset)
    return {
        "X-RateLimit-Limit": str(RATE_LIMIT),
        "X-RateLimit-Remaining": str(RATE_LIMIT - count - 1),
        "X-RateLimit-Reset": str(int(reset)),
    }
