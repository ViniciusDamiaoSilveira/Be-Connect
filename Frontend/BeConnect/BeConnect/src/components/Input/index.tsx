import { Autocomplete } from "@mui/material";
import axios from "axios";
import { InputHTMLAttributes, useEffect, useState} from "react";
import { ColorRing, Oval } from "react-loader-spinner";
import { twMerge } from "tailwind-merge";
import { useDebounce } from 'use-debounce';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
}

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG


export default function Input({className, ...props} : InputProps) {

    const [text, setText] = useState('');
    const [last_text, setlastText] = useState('');
    const [text_delay] = useDebounce(text, 500);

    const [isLoading, setIsLoading] = useState(false) 

    const [listMovies, setlistMovies] = useState<Array<any>>([])
    
    useEffect(() => {
        searchMovie()
        setlastText(text_delay)
        setIsLoading(false)
      }, [text_delay != last_text]);

    useEffect(() => {
        setlastText(text_delay)
    }, [text_delay])

    async function searchMovie() {
        try {
          const response = await axios.get(`${tmdbURL}/search/movie?query=${text_delay}&include_adult=true&language=pt-BR&page=1`, {
          headers: {
                'Authorization' : 'Bearer ' + bearer,
              }
            })
          setlistMovies(response.data.results)
          
        } catch (error) {
          console.log(error);
        }
      }
    
        useEffect(() => {
            searchMovie()    
          }, [])

      console.log('IS LOADING' + isLoading);
    

    // https://api.themoviedb.org/3/search/movie?query=Batman&include_adult=true&language=pt-BR&page=1

    return (
            <div className="flex flex-col">
                <input
                    className={twMerge('w-76 h-10 rounded-md bg-gray placeholder:text-light-gray pl-4 outline-none text-light-gray', className)}
                    onChange={(e) => {
                    setText(e.target.value);
                    setIsLoading(true)
                    }}
                    placeholder="Pesquisar..."
                />

                {listMovies.length > 0 && text.length > 0 && (
                  <div className="w-90 h-76 flex flex-col gap-1 mt-11 z-50 absolute bg-gray overflow-y-scroll">
                      {listMovies.length > 0 && 
                        listMovies.map((movies) => (
                            <div className="h-28 flex items-center gap-6 text-white cursor-pointer duration-300 hover:bg-half-gray"> 
                              <img src={imgURL + movies.poster_path} alt={movies.id} className="w-16 h-24"/>
                              {movies.title}
                            
                             </div>
                        ))}
                  </div>
                )}

                {isLoading === true && (
                  <div className="w-90 h-12 rounded-md flex items-center absolute mt-11"> 
                    <div className="h-12 flex ml-2 items-center gap-2">
                      <Oval
                        visible={true}
                        height="15"
                        width="15"
                        color="#FFFFFF"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        secondaryColor="#FFFFFF"
                      />
                      <span className="text-white text-sm"> Carregando... </span>    
                    </div>
                  </div>
                )}
                
        </div>
        
        // <input
        //     {...props} 
        //     className={twMerge('w-60 h-10 rounded-md bg-gray placeholder:text-light-gray pl-4 outline-none text-light-gray', className)}
        //     />
    )
}

// {listMovies.length > 0 && 
//   listMovies.map((movies) => (
     
//   ))}