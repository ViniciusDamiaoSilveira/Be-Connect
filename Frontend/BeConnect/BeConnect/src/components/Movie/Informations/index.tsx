import { Rating } from 'primereact/rating';
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './index.css'

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG


export default function Informations() {

    const [movie, setMovie] = useState<any>()
    let { id } = useParams()

    async function getMovie() {
        try {
          const response = await axios.get(`${tmdbURL}/movie/${id}?language=pt-BR`, {
          headers: {
                'Authorization' : 'Bearer ' + bearer,
              }
            })
          
          setMovie(response.data)
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        getMovie()    
      }, [])

    console.log(movie)

    return (
        <div className="w-full h-96 relative">
            {movie && (
            <div
            style={{backgroundImage: `url(${imgURL + movie?.backdrop_path})`}} 
            className='w-full h-full bg-cover bg-no-repeat blur opacity-40 -z-10 absolute'>
            </div>
            )}
            

            <div className="w-full h-full flex items-end">
                {movie && (
                    <div 
                        style={{ backgroundImage: `url(${imgURL + movie?.poster_path})` }}
                        className="w-56 h-85 mb-3 bg-cover bg-no-repeat ml-8"
                        >
                    </div>
                )}
                
                {movie && (
                    <div className="w-8/12 ml-8 flex flex-col gap-3 mb-3">
                        <div className='w-full h-full flex items-center gap-5'>
                            <h1 className="text-white font-bold text-3.5xl"> {movie.title} </h1>     
                            <Rating className='text-yellow gap-2 flex items-center text-xl custom-rating' style={{fontSize: '4rem'}} value={5} stars={5} readOnly cancel={false} />
                        </div> 

                        <p className="text-white text-lg w-11/12"> {movie.overview} </p>  
                    </div>  
                )}
                
            </div>

        </div>

    )
}

