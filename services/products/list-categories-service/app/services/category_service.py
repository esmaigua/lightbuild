from app.models.category_model import Category
from sqlalchemy.orm import Session
from typing import List

class CategoryService:
    def __init__(self, db: Session):
        self.db = db

    def list_categories(self) -> List[Category]:
        return self.db.query(Category).all()
