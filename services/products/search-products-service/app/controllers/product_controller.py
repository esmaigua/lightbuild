from app.services.product_service import ProductService
from app.schemas.product_schema import ProductListResponse
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from typing import Optional


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def search_products_controller(name: Optional[str], category: Optional[str], db: Session = Depends(get_db)) -> ProductListResponse:
    service = ProductService(db)
    products = service.search_products(name, category)
    return ProductListResponse(products=products)
