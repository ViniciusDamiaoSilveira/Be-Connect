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
            {props.loading === true && (
                <div className='w-full h-full flex-col items-center'>
                    <div className="flex gap-10 mb-3">
                        
                        <SkeletonTheme baseColor="#3A3A3A" highlightColor="#3F3F3F" width={'100%'} height={'100%'}>
                            <div className="w-80 h-10">
                                <Skeleton/>    
                            </div>
                        </SkeletonTheme> 

                        <Rating className='text-light-gray gap-2 flex items-center text-xl custom-rating' style={{fontSize: '4rem'}} value={5} stars={5} readOnly cancel={false} />    
                    </div>
                    <SkeletonTheme baseColor="#3A3A3A" highlightColor="#3F3F3F" width={'100%'} height={'100%'}>
                        <div className="w-115 h-6 mb-30">
                            <Skeleton count={5}/>    
                        </div>
                    </SkeletonTheme> 
                </div> 
            )}

            {props.loading === false && (
                <div className='w-full h-full flex-col items-center'>
                    <div className="flex gap-10 mb-3">
                        <h1 className="text-white font-bold text-3.5xl"> 
                        {props.title} 
                        </h1>     
                        <Rating className='text-yellow gap-2 flex items-center text-xl custom-rating' style={{fontSize: '4rem'}} value={5} stars={5} readOnly cancel={false} />    
                    </div>
                    <p className="text-white text-lg w-11/12"> {props.overview} </p>
                </div> 
            )}
             
        </div>
    ) 
}