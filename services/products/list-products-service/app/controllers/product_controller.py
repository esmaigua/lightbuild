from app.services.product_service import ProductService
from app.schemas.product_schema import ProductListResponse
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def list_products_controller(db: Session = Depends(get_db)) -> ProductListResponse:
    service = ProductService(db)
    products = service.list_products()
    return ProductListResponse(products=products)
