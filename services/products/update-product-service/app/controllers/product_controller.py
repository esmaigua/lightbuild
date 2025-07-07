from app.schemas.product_schema import ProductUpdate, ProductResponse
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

def update_product_controller(product: ProductUpdate, db: Session = Depends(get_db)) -> ProductResponse:
    service = ProductService(db)
    return service.update_product(product)