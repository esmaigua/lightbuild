from app.models.product_model import Product
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

class ProductService:
    def __init__(self, db: Session):
        self.db = db

    def delete_product(self, product_id: int) -> dict:
        product = self.db.query(Product).filter(Product.id == product_id).first()
        if not product:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
        if product.is_deleted:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Product already deleted")

        product.is_deleted = True
        self.db.commit()
        return {"id": product.id, "deleted": True}
