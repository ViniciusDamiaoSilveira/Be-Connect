import { Rating } from "primereact/rating"
import './index.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


interface InformationsProps {
    title: string,
    value: number,
    overview: string,
    loading?: boolean
}

export default function Informations(props : InformationsProps) {
    return (
        <div className="w-8/12 ml-8 flex flex-col gap-3 mb-3">
            <div className='w-full h-full flex items-center gap-10'>
                <h1 className="text-white font-bold text-3.5xl"> 
                {props.title || <Skeleton/>} 
                </h1>     
                <Rating className='text-yellow gap-2 flex items-center text-xl custom-rating' style={{fontSize: '4rem'}} value={5} stars={5} readOnly cancel={false} />
            </div> 
        
            <p className="text-white text-lg w-11/12"> {props.overview} </p>  
        </div>
    ) 
}