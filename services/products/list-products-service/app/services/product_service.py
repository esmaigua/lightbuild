from app.models.product_model import Product
from sqlalchemy.orm import Session
from typing import List

class ProductService:
    def __init__(self, db: Session):
        self.db = db

    def list_products(self) -> List[Product]:
        return self.db.query(Product).filter(Product.is_deleted == False).all()