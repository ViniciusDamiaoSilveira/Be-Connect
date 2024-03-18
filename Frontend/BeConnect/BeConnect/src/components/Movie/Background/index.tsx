import { Rating } from 'primereact/rating';
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Bookmark, Calendar, Clock } from 'lucide-react';
import Informations from '../Informations';

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG


export default function Background() {

    const [movie, setMovie] = useState<any>()
    const [genres, setGenres] = useState!<[]>()
    let { id } = useParams()
    const [lastID, setLastID] = useState(id)

    

    async function getMovie() {
        try {
          const response = await axios.get(`${tmdbURL}/movie/${id}?language=pt-BR`, {
          headers: {
                'Authorization' : 'Bearer ' + bearer,
              }
            })
          
          setMovie(response.data)
          console.log(response.data);
          
          
        } catch (error) {
          console.log(error);
        }
      }
  
      //Usado para atualizar a pagina
      useEffect(() => {
        setTimeout(() => {
          getMovie()
          setLastID(id)
        }, 5000);
      }, [id == lastID])

      useEffect(() => {
        setTimeout(() => {
          setGenres(movie.genres);
        }, 100);
        
      }, [movie])

    console.log(movie)


    return (
        <div>
            {movie && (
              <div className='w-full h-100 relative'>
                <div
                  style={{backgroundImage: `url(${imgURL + movie?.backdrop_path})`}} 
                  className='w-screen h-full bg-cover bg-center bg-no-repeat blur opacity-40 -z-10 absolute'>
                </div>
              
                <div className="w-full h-full flex items-end">
                  <div 
                      style={{ backgroundImage: `url(${imgURL + movie?.poster_path})` }}
                      className="w-56 h-85 mb-3 bg-cover bg-no-repeat ml-8">
                  </div>

                  <Informations 
                  title={movie.title} 
                  value={5} 
                  overview={movie.overview} /> 

                </div>
              </div>
            )}
          <div className='h-20 flex w-full mt-3'> 
            <button className='w-56 h-14 flex justify-center gap-2 items-center text-white border-yellow border-2 ml-8'> 
              <Bookmark className='h-5' size={18} strokeWidth={1.5} />
                Adicionar a lista 
            </button>
            
            { genres?.length === 1 && (
              <div className='ml-8 px-4 h-9 flex items-center rounded-md border-white border-2 text-white'> {genres[0].name} </div>
            )}

            { genres?.length > 1 && (
              <div className='ml-8 px-4 h-9 flex items-center rounded-md border-white border-2 text-white'> {genres[0].name} / {genres[1].name} </div>
            )}

            {movie && (
              <div>
                <div className='h-9 flex items-center text-white'> 
                  <Clock strokeWidth={1.5} className='h-5'/>
                  {movie.runtime} min 
                </div>

                <div className='text-white flex'>
                  <Calendar strokeWidth={1}/>
                  {movie.release_date.split('-')[0]}
                </div>
              </div>
            )}

          </div>

        </div>

    )
}

              

            
         
          // </div>