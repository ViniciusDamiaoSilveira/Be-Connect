import { ListFilter } from "lucide-react";
import HeaderMobile from "../../components/HeaderMobile";
import HeaderPC from "../../components/HeaderPC";
import Background from "../../components/Movie/Background";
import Post from "../../components/Home/Post";

export default function Movie() {
    return(
        <div className="">
            <div className="lg:hidden"> 
                <HeaderMobile/> 
            </div>
            <div className="w-full hidden xl:flex lg:flex-col"> 
                <HeaderPC/> 
                <div className="w-full h-fit flex-col overflow-hidden"> 
                    <Background/>
                </div>
            </div>
            
        </div>
    )
}