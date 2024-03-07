import Aside from "../../components/Aside";
import HeaderMobile from "../../components/HeaderMobile";
import HeaderPC from "../../components/HeaderPC";


export default function Home() {
    return(
        <div className="">
            <div className="lg:hidden"> 
                <HeaderMobile/> 
            </div>
            <div className="hidden lg:block"> 
                <HeaderPC/> 
                {/* <Card/> */}
                <Aside/>
            </div>
            
        </div>
    ) 
}