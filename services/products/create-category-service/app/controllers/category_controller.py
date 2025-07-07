from app.schemas.category_schema import CategoryCreate, CategoryResponse
from app.services.category_service import CategoryService
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def create_category_controller(category: CategoryCreate, db: Session = Depends(get_db)) -> CategoryResponse:
    service = CategoryService(db)
    return service.create_category(category)