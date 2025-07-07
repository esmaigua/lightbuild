from app.models.product_model import Product
from sqlalchemy.orm import Session
from typing import List, Optional

class ProductService:
    def __init__(self, db: Session):
        self.db = db

    def search_products(self, name: Optional[str] = None, category: Optional[str] = None) -> List[Product]:
        query = self.db.query(Product).filter(Product.is_deleted == False)
        if name:
            query = query.filter(Product.name.ilike(f"%{name}%"))
        if category:
            query = query.filter(Product.category.ilike(f"%{category}%"))
        return query.all()