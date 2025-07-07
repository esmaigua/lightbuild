from app.schemas.product_schema import ProductResponse
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

def get_product_controller(product_id: int, db: Session = Depends(get_db)) -> ProductResponse:
    service = ProductService(db)
    return service.get_product_by_id(product_id)