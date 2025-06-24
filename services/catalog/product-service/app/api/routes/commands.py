from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from app.schemas.product_schema import ProductCreate, ProductUpdate, ProductOut
from app.services import product_service
from app.core.database import SessionLocal
from app.deps import admin_or_vendor_required

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=ProductOut, dependencies=[Depends(admin_or_vendor_required)])
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    return product_service.create_new_product(db, product)

@router.put("/{product_id}", response_model=ProductOut, dependencies=[Depends(admin_or_vendor_required)])
def update_product(product_id: UUID, product: ProductUpdate, db: Session = Depends(get_db)):
    result = product_service.update_existing_product(db, product_id, product)
    if not result:
        raise HTTPException(status_code=404, detail="Product not found")
    return result

@router.delete("/{product_id}", dependencies=[Depends(admin_or_vendor_required)])
def delete_product(product_id: UUID, db: Session = Depends(get_db)):
    result = product_service.delete_product_by_id(db, product_id)
    if not result:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted"}