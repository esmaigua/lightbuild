from fastapi import APIRouter
from app.controllers.product_controller import delete_product_controller
from app.schemas.product_schema import ProductDeleteResponse

router = APIRouter()

@router.delete("/delete-product", response_model=ProductDeleteResponse)
def delete_product_route(product_id: int):
    return delete_product_controller(product_id)
