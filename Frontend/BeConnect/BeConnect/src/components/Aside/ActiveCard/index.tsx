import { twJoin, twMerge } from "tailwind-merge"
import image from '../../../assets/poster_evil_dead_rise.jpg'

export default function ActiveCard() {
    return(
        <div
        style={{ backgroundImage: `url(${image})` }} 
        className={"w-70 h-96 flex justify-center items-end rounded-lg ml-8 mb-5 shadow-lg bg-cover bg-no-repeat"}>

            <button className="border-2 border-yellow px-9 py-1.5 rounded-md text-white mb-3 duration-300 hover:opacity-70"> Confira já! </button> 
        </div>
    )
}