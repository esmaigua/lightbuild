import redis
import json
from app.core.config import settings
from app.crud import product_crud

r = redis.Redis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, decode_responses=True)


def get_product_detail(db, product_id):
    key = f"product:{product_id}"
    cached = r.get(key)
    if cached:
        return json.loads(cached)
    product = product_crud.get_product_by_id(db, product_id)
    if product:
        r.setex(key, 600, json.dumps({
            "id": str(product.id),
            "name": product.name,
            "description": product.description,
            "price": product.price,
            "image_url": product.image_url,
            "category_id": product.category_id
        }))
    return product


def list_all_products(db, skip: int = 0, limit: int = 10):
    return product_crud.get_all_products(db, skip, limit)


def create_new_product(db, product):
    return product_crud.create_product(db, product)


def update_existing_product(db, product_id, product):
    return product_crud.update_product(db, product_id, product)


def delete_product_by_id(db, product_id):
    return product_crud.delete_product(db, product_id)