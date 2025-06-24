from sqlalchemy.orm import Session
from app.models.product_model import Product
from app.schemas.product_schema import ProductCreate, ProductUpdate


def create_product(db: Session, product: ProductCreate):
    db_product = Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


def get_product_by_id(db: Session, product_id):
    return db.query(Product).filter(Product.id == product_id).first()


def update_product(db: Session, product_id, updates: ProductUpdate):
    product = get_product_by_id(db, product_id)
    if product:
        for key, value in updates.dict(exclude_unset=True).items():
            setattr(product, key, value)
        db.commit()
        db.refresh(product)
    return product


def delete_product(db: Session, product_id):
    product = get_product_by_id(db, product_id)
    if product:
        db.delete(product)
        db.commit()
    return product


def get_all_products(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Product).offset(skip).limit(limit).all()