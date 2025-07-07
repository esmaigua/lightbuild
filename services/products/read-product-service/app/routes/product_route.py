from fastapi import APIRouter
from app.controllers.product_controller import get_product_controller
from app.schemas.product_schema import ProductResponse

router = APIRouter()

@router.get("/read-product", response_model=ProductResponse)
def read_product_route(product_id: int):
    return get_product_controller(product_id)