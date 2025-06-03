SAMPLE_FOODS = [
    {
        "id": 1,
        "name": "Broccoli",
        "thumbnail_url": "https://example.com/broccoli.jpg",
        "nutrients": {"calories": 34, "protein": 2.8, "polyphenol_score": 80},
    },
    {
        "id": 2,
        "name": "Apple",
        "thumbnail_url": "https://example.com/apple.jpg",
        "nutrients": {"calories": 52, "protein": 0.3, "polyphenol_score": 65},
    },
    {
        "id": 3,
        "name": "Carrot",
        "thumbnail_url": "https://example.com/carrot.jpg",
        "nutrients": {"calories": 41, "protein": 0.9, "polyphenol_score": 40},
    },
]


def search_foods(query: str):
    query_lower = query.lower()
    return [f for f in SAMPLE_FOODS if query_lower in f["name"].lower()]
