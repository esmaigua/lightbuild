from app.models.product_model import Product
from app.schemas.product_schema import ProductCreate
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

class ProductService:
    def __init__(self, db: Session):
        self.db = db

    def create_product(self, product_data: ProductCreate) -> Product:
        existing = self.db.query(Product).filter(Product.name == product_data.name).first()
        if existing:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Product already exists")

        product = Product(**product_data.dict())
        self.db.add(product)
        self.db.commit()
        self.db.refresh(product)
        return product