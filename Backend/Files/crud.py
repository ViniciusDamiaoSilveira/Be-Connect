import Files.models as models
import Files.schemas as sc
from uuid import uuid4
from sqlalchemy.orm import Session
from sqlalchemy import or_
import bcrypt

## User
# GET
async def get_user(db: Session, user: sc.UserBase):
    return db.query(models.User).filter(or_(models.User.email == user.email, models.User.username == user.username)).first()

# POST 
async def create_user(db: Session, user: sc.UserBase):
    db_user = models.User(**user.model_dump())
    db_user.id = uuid4()
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

## Entertainment

# GET


# POST
async def create_entertainment(db: Session, entertainment: sc.EntertainmentBase):
    db_entertainment = models.Entertainment(**entertainment.model_dump())
    db_entertainment.id = uuid4()
    db.add(db_entertainment)
    db.commit()
    db.refresh(db_entertainment)
    return db_entertainment    

# PUT


# DELETE

## Type

# GET
async def get_types(db: Session):
    return db.query(models.Type).all()


