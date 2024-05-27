import { Rating } from "@mui/material";
import { twMerge } from "tailwind-merge";

interface MovieCardProps {
    title: string,
    rating: number,
    poster: string,
    classname: string
} 

const imgURL = import.meta.env.VITE_TMDB_IMG

export default function MovieCard(props: MovieCardProps) {
    return (
        <div className={twMerge('flex flex-col text-white', props.classname)}>
            <img src={imgURL + props.poster} alt="" />
            <p> {props.title} </p>
            <Rating readOnly value={5}/>
        </div>
    )
}