from sqlalchemy import Column, String, Integer, Enum, ForeignKey, Float, BigInteger
from sqlalchemy.orm import relationship
from Files.database import Base


class Type(Base):
    __tablename__ = 'type'
    
    id = Column(String(255), primary_key=True, index=True)
    type = Column(String(100), unique=True, nullable=False)
    
    entertainments = relationship('Entertainment', back_populates='type_fk')
    


class Entertainment(Base):
    __tablename__ = 'entertainment'
    
    id = Column(String(255), primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    description = Column(String(700), nullable=False)
    released_year = Column(Integer, nullable=False)
    duration = Column(String(20))
    difficulty_percent = Column(Integer)
    numberEpisodes = Column(Integer)
    numberSeasons = Column(Integer)
    numberPages = Column(Integer)
    numberChapters = Column(Integer)
    id_type = Column(String(255), ForeignKey(Type.id), nullable=False)
    
    
    wishlist = relationship('Wishlist', back_populates='entertainment_fk')
    rating = relationship('Rating', back_populates='entertainment_fk')
    comments = relationship('Comments', back_populates='entertainment_fk')
    chapter = relationship('Chapter', back_populates='entertainment_fk')
    episode = relationship('Episode', back_populates='entertainment_fk')
    todolist = relationship('ToDoList', back_populates='entertainment_fk')
    donelist = relationship('DoneList', back_populates='entertainment_fk')

    
    type_fk = relationship('Type', back_populates='entertainments')


class User(Base):
    __tablename__ = 'user'
    
    id = Column(String(255), primary_key=True, index=True)
    username = Column(String(100), nullable=False)
    password = Column(String(255), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(Integer)
    type = Column(Enum('Adm', 'User'), nullable=False)
    
    wishlist = relationship('Wishlist', back_populates='user_fk')
    rating = relationship('Rating', back_populates='user_fk')
    comments = relationship('Comments', back_populates='user_fk')
    todolist = relationship('ToDoList', back_populates='user_fk')
    donelist = relationship('DoneList', back_populates='user_fk')
    

class ToDoList(Base):
    __tablename__ = 'todolist'
    
    id = Column(String(255), primary_key=True, index=True)
    id_user_fk = Column(String(255), ForeignKey('user.id'), nullable=False)
    id_entertainment_fk = Column(String(255), ForeignKey('entertainment.id'), nullable=False)
    
    user_fk = relationship('User', back_populates='todolist')
    entertainment_fk = relationship('Entertainment', back_populates='todolist')
    
class DoneList(Base):
    __tablename__ = 'donelist'
    
    id = Column(String(255), primary_key=True, index=True)
    id_user_fk = Column(String(255), ForeignKey('user.id'), nullable=False)
    id_entertainment_fk = Column(String(255), ForeignKey('entertainment.id'), nullable=False)
    
    user_fk = relationship('User', back_populates='donelist')
    entertainment_fk = relationship('Entertainment', back_populates='donelist')
 
    
class Wishlist(Base):
    __tablename__ = 'wishlist'
    
    id = Column(String(255), primary_key=True, index=True)
    id_user_fk = Column(String(255), ForeignKey('user.id'), nullable=False)
    id_entertainment_fk = Column(String(255), ForeignKey('entertainment.id'), nullable=False)
    
    user_fk = relationship('User', back_populates='wishlist')
    entertainment_fk = relationship('Entertainment', back_populates='wishlist')
    
    
class Rating(Base):
    __tablename__ = 'rating'
    
    id = Column(String(255), primary_key=True, index=True)
    id_user_fk = Column(String(255), ForeignKey('user.id'), nullable=False)
    id_entertainment_fk = Column(String(255), ForeignKey('entertainment.id'), nullable=False)
    rate = Column(Float, nullable=False)
    date = Column(String(25), nullable=False)
    
    user_fk = relationship('User', back_populates='rating')
    entertainment_fk = relationship('Entertainment', back_populates='rating')
    
    

class Comments(Base):
    __tablename__ = 'comments'
    
    id = Column(String(255), primary_key=True, index=True)
    id_user_fk = Column(String(255), ForeignKey('user.id'), nullable=False)
    id_entertainment_fk = Column(String(255), ForeignKey('entertainment.id'), nullable=False)
    comment = Column(String(700), nullable=False)
    date = Column(String(25), nullable=False) 
    likes = Column(BigInteger, nullable=False)
    
    user_fk = relationship('User', back_populates='comments')
    entertainment_fk = relationship('Entertainment', back_populates='comments')


class Chapter(Base):
    __tablename__ = 'chapter'
    
    id = Column(String(255), primary_key=True, index=True)
    id_entertainment_fk = Column(String(255), ForeignKey('entertainment.id'), nullable=False)
    name = Column(String(100), nullable=False)
    numberChapter = Column(Integer, nullable=False)
    
    entertainment_fk = relationship('Entertainment', back_populates='chapter')
    
    
    
class Episode(Base):
    __tablename__ = 'episode'
    
    id = Column(String(255), primary_key=True, index=True)
    id_entertainment_fk = Column(String(255), ForeignKey('entertainment.id'), nullable=False)
    name = Column(String(100), nullable=False)
    duration = Column(String(10), nullable=False)    
    
    entertainment_fk = relationship('Entertainment', back_populates='episode')
    