from fastapi import APIRouter
from app.controllers.category_controller import list_categories_controller
from app.schemas.category_schema import CategoryListResponse

router = APIRouter()

@router.get("/list-categories", response_model=CategoryListResponse)
def list_categories_route():
    return list_categories_controller()