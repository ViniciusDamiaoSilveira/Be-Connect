import { Autocomplete } from "@mui/material";
import axios from "axios";
import { InputHTMLAttributes, useEffect, useState} from "react";
import { twMerge } from "tailwind-merge";
import { useDebounce } from 'use-debounce';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
}

const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER
const imgURL = import.meta.env.VITE_TMDB_IMG

const options = [''];


export default function Input({className, ...props} : InputProps) {

    const [text, setText] = useState('');
    const [last_text, setlastText] = useState('');
    const [text_delay] = useDebounce(text, 800);

    const [listMovies, setlistMovies] = useState<Array<any>>([])
    
    useEffect(() => {
        searchMovie()
        setlastText(text_delay)
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

      console.log(listMovies);
      
    

    // https://api.themoviedb.org/3/search/movie?query=Batman&include_adult=true&language=pt-BR&page=1

    return (
            <div>
                <input
                    className={twMerge('w-60 h-10 rounded-md bg-gray placeholder:text-light-gray pl-4 outline-none text-light-gray', className)}
                    onChange={(e) => {
                    setText(e.target.value);
                    }}
                    placeholder="Pesquisar..."
                />
        </div>
        
        // <input
        //     {...props} 
        //     className={twMerge('w-60 h-10 rounded-md bg-gray placeholder:text-light-gray pl-4 outline-none text-light-gray', className)}
        //     />
    )
}