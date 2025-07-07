from app.models.product_model import Product
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

class ProductService:
    def __init__(self, db: Session):
        self.db = db

    def get_product_by_id(self, product_id: int) -> Product:
        product = self.db.query(Product).filter(Product.id == product_id).first()
        if not product:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
        return product