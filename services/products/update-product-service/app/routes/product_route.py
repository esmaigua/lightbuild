from fastapi import APIRouter
from app.controllers.product_controller import update_product_controller
from app.schemas.product_schema import ProductUpdate, ProductResponse

router = APIRouter()

@router.put("/update-product", response_model=ProductResponse)
def update_product_route(product: ProductUpdate):
    return update_product_controller(product)
