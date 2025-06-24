from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID
from app.schemas.product_schema import ProductOut
from app.services import product_service
from app.core.database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=List[ProductOut])
def list_products(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return product_service.list_all_products(db, skip, limit)

@router.get("/{product_id}", response_model=ProductOut)
def get_product(product_id: UUID, db: Session = Depends(get_db)):
    product = product_service.get_product_detail(db, str(product_id))
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product