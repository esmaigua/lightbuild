from app.schemas.product_schema import ProductCreate, ProductResponse
from app.services.product_service import ProductService
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def create_product_controller(product: ProductCreate, db: Session = Depends(get_db)) -> ProductResponse:
    service = ProductService(db)
    return service.create_product(product)