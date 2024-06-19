import { Rating } from "primereact/rating"
import './index.css'

interface MoviesByCategoryProps {
    img: string,
    title: string,
    rating: number
}

export default function MoviesByCategory({img , title, rating} : MoviesByCategoryProps) {
    return (
        <div className="w-64 h-82 cursor-pointer text-white hover:opacity-75 duration-300">
            <img src={img} alt="genre"/>
            <h1 className='text-xl font-bold mt-4'> {title} </h1>
            <div className="h-10 flex items-center text-lg gap-3">
                <Rating className="text-yellow" value={1} stars={1} readOnly cancel={false}/> {rating}
            </div>
        </div>
    )
}