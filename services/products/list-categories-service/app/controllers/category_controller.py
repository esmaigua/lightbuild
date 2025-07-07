from app.services.category_service import CategoryService
from app.schemas.category_schema import CategoryListResponse
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def list_categories_controller(db: Session = Depends(get_db)) -> CategoryListResponse:
    service = CategoryService(db)
    categories = service.list_categories()
    return CategoryListResponse(categories=categories)