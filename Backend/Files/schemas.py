
from pydantic import BaseModel

class TypeBase(BaseModel):
    __abstract__ = True
    type : str
    

class EntertainmentBase(BaseModel):
    name : str
    description : str
    released_year : int
    duration : str
    difficulty_percent : int
    numberEpisodes : int
    numberSeasons : int
    numberPages : int
    numberChapters : int
    id_type : str 
    
    
class UserBase (BaseModel):
    username : str 
    password : str
    email : str
    phone : int 
    type : str 
    
    
class WishlistBase(BaseModel):
    id_user_fk : str
    id_entertainment_fk : str


class TodoBase(BaseModel):
    id_user_fk : str
    id_entertainment_fk : str


class DoneListBase(BaseModel):
    id_user_fk : str
    id_entertainment_fk : str


class RatingBase(BaseModel):
    id_user_fk : str
    id_entertainment_fk : str
    rate : float
    date : str
    
    
class CommentsBase(BaseModel):
    id_user_fk : str
    id_entertainment_fk : str
    comment : str
    date : str 
    likes : int
    

class ChapterBase(BaseModel): 
    id_entertainment_fk : str
    name : str
    numberChapter : int
    
    
class Episode(BaseModel):
    id_entertainment_fk : str
    name : str
    duration : str     
    