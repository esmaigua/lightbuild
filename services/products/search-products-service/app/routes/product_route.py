from fastapi import APIRouter, Query
from app.controllers.product_controller import search_products_controller
from app.schemas.product_schema import ProductListResponse
from typing import Optional

router = APIRouter()

@router.get("/search-products", response_model=ProductListResponse)
def search_products_route(
    name: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    return search_products_controller(name, category)