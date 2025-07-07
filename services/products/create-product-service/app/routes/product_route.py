from fastapi import APIRouter
from app.controllers.product_controller import create_product_controller
from app.schemas.product_schema import ProductCreate, ProductResponse

router = APIRouter()

@router.post("/create-product", response_model=ProductResponse)
def create_product_route(product: ProductCreate):
    return create_product_controller(product)