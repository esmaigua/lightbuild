from fastapi import APIRouter
from app.controllers.category_controller import create_category_controller
from app.schemas.category_schema import CategoryCreate, CategoryResponse

router = APIRouter()

@router.post("/create-category", response_model=CategoryResponse)
def create_category_route(category: CategoryCreate):
    return create_category_controller(category)