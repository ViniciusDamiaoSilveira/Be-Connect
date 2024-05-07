import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "./Cards"

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER

export default function Categories() {

    const [list_genres, setListGenres] = useState<Array<any>>([])
    
    async function getListGenres() {
        try {
          const response = await axios.get(`${tmdbURL}genre/movie/list?language=pt-BR`, {
          headers: {
                'Authorization' : 'Bearer ' + bearer,
              }
            })
          
          let list_gen: Array<any> = response.data.genres
          
          const genresAscending = list_gen.slice()
            .sort((a, b) => 
                a.name.localeCompare(b.name))
          
          setListGenres(genresAscending)
          
          
          
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        getListGenres()
    }, [])

    return (
        <div className="w-full h-fit flex flex-col items-center mt-8">
            <h1 className="text-3xl text-white font-bold"> Categorias </h1>
                {
                    list_genres.length > 0 && (
                        <div className="flex justify-center gap-10 flex-wrap mt-10 ">
                            {list_genres.map((genre) => ( 
                                    <Cards key={genre.name} name={genre.name} genre={genre.name}/>
                            ))}
                        </div>
                    )
                }
        </div>
    )
}