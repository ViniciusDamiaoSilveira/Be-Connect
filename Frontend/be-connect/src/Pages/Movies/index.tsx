import HeaderPC from "../../Components/PC/Header";
import MovieInfo from "../../Components/PC/Movie/MovieInfo";


export default function Movie() {
    return(
        <div className="">
            <div className="w-full hidden xl:flex lg:flex-col"> 
                <HeaderPC/> 
                <div className="w-full h-fit flex-col overflow-hidden"> 
                    <MovieInfo/>
                </div>
            </div>
            
        </div>
    )
}