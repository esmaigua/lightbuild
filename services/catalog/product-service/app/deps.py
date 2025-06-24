from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from app.core.config import settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=["HS256"])
        role = payload.get("role")
        if not role:
            raise HTTPException(status_code=403, detail="Role not found in token")
        return {"role": role}
    except JWTError:
        raise HTTPException(status_code=403, detail="Invalid token")

def admin_or_vendor_required(user: dict = Depends(get_current_user)):
    if user["role"] not in ["admin", "vendor"]:
        raise HTTPException(status_code=403, detail="Access denied")
