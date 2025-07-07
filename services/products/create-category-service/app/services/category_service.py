from app.models.category_model import Category
from app.schemas.category_schema import CategoryCreate
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

class CategoryService:
    def __init__(self, db: Session):
        self.db = db

    def create_category(self, category_data: CategoryCreate) -> Category:
        existing = self.db.query(Category).filter(Category.name == category_data.name).first()
        if existing:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Category already exists")

        category = Category(**category_data.dict())
        self.db.add(category)
        self.db.commit()
        self.db.refresh(category)
        return category
