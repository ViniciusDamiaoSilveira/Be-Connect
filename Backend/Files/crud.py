import Files.models as models
import Files.schemas as sc
from uuid import uuid4
from sqlalchemy.orm import Session

# async def create_types_entertainment(db: Session, objs: sc.TypeBase):
#     if 
#     db_item = models.Type(**sc.TypeBase)
#     db_item.id = uuid4()
#     db_item.type = 'Movie'

# @app.post('/users/', status_code=status.HTTP_201_CREATED)
# async def create_user(user: UserBase, db: db_dependency):
#     db_user = models.User(**user.model_dump())
#     db_user.id = uuid4()
#     db.add(db_user)
#     db.commit()
    
# async def get_user(user_id : str, db: db_dependency):
#     user = db.query(models.User).filter(models.User.id == user_id).first()
#     if user is None:
#         raise HTTPException(status_code=404, detail='User not found')
#     return user


async def create_entertainment(db: Session, entertainment: sc.EntertainmentBase):
    db_entertainment = models.Entertainment(**entertainment.model_dump())
    db_entertainment.id = uuid4()
    db.add(db_entertainment)
    db.commit()
    db.refresh(db_entertainment)
    return db_entertainment    