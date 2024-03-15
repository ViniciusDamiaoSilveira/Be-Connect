import HeaderMobile from "../../components/HeaderMobile";
import HeaderPC from "../../components/HeaderPC";
import Informations from "../../components/Movie/Informations";

export default function Movie() {
    return(
        <div className="">
            <div className="lg:hidden"> 
                <HeaderMobile/> 
            </div>
            <div className="w-full hidden xl:flex lg:flex-col"> 
                <HeaderPC/> 
                <div className="w-full h-fit flex overflow-hidden"> 
                    <Informations/>
                </div>
            </div>
            
        </div>
    )
}