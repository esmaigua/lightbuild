from app.models.product_model import Product
from app.schemas.product_schema import ProductUpdate
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

class ProductService:
    def __init__(self, db: Session):
        self.db = db

    def update_product(self, product_data: ProductUpdate) -> Product:
        product = self.db.query(Product).filter(Product.id == product_data.id).first()
        if not product:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")

        for field, value in product_data.dict().items():
            setattr(product, field, value)

        self.db.commit()
        self.db.refresh(product)
        return product