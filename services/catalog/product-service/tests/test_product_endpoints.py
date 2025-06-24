import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_list_products():
    response = client.get("/products/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_create_product_unauthorized():
    new_product = {
        "name": "Test Panel",
        "description": "Lightweight test panel",
        "price": 15.5,
        "image_url": "http://example.com/image.jpg",
        "category_id": "category-test"
    }
    response = client.post("/products/", json=new_product)
    assert response.status_code == 401  # Unauthorized since no token is provided
