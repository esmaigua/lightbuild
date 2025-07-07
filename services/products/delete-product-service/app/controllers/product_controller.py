from app.services.product_service import ProductService
from app.schemas.product_schema import ProductDeleteResponse
from fastapi import Depends
from sqlalchemy.orm import Session
from app.db.database import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def delete_product_controller(product_id: int, db: Session = Depends(get_db)) -> ProductDeleteResponse:
    service = ProductService(db)
    result = service.delete_product(product_id)
    return ProductDeleteResponse(**result)