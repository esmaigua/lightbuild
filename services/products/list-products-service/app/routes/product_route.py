from fastapi import APIRouter
from app.controllers.product_controller import list_products_controller
from app.schemas.product_schema import ProductListResponse

router = APIRouter()

@router.get("/list-products", response_model=ProductListResponse)
def list_products_route():
    return list_products_controller()