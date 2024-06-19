import axios from "axios"
import { useEffect, useState } from "react"
import Accordion from '@mui/material/Accordion';
 import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';


const tmdbURL = import.meta.env.VITE_TMDB_API
const bearer = import.meta.env.VITE_TMDB_BEARER

export default function AsideGenre({handleGenre} : any) {
    const [list_genres, setListGenres] = useState<Array<any>>([])
    let id_genre = ''
    
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
        <div className="w-70 m-">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color : '#F1F1F1'}}/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ backgroundColor : '#2C2C2C'}}
                >
                <h1 className="text-white"> Categorias </h1>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor : '#2C2C2C'}}>

                    <RadioGroup name="use-radio-group"
                    defaultValue={0} 
                    onChange={(event) => handleGenre((event.target as HTMLInputElement).value)}>
                        <div className="text-white" key={0}>
                            <FormControlLabel value={0} label={'Nenhuma'}  control={
                            <Radio sx={{color: '#F1F1F1', '&.Mui-checked': {color: '#FFBF15'}}}/>} />
                        </div>
                        {
                            list_genres.length > 0 && ( 
                                list_genres.map((genre) => (
                                    <div className="text-white" key={genre.id}>
                                        <FormControlLabel value={genre.id} label={genre.name} control={
                                        <Radio sx={{color: '#F1F1F1', '&.Mui-checked': {color: '#FFBF15'}}}/>} />
                                    </div>
                                ))
                            )
                        } 
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}