import axios from "axios"
import { useEffect, useState } from "react"

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER

interface AsideProps {
    genre: string,
}

export default function Aside({}) {
    const [list_genres, setListGenres] = useState<Array<any>>([])
    const [genre, setGenre] = useState('')
    
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
        <div>
            <div className="w-80 h-70 bg-gray ml-8 mt-8 rounded-md">
                <h1 className="text-lg text-white ml-5"> Categoria </h1>

                {
                    list_genres.map((genre) => (
                        <div key={genre.id}>
                            <label className="ml-5 text-white"> 
                                <input 
                                    type="radio" 
                                    name="checkmark"
                                    className="accent-yellow"
                                    />
                                <span 
                                    className="checkmark"></span> {genre.name}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}