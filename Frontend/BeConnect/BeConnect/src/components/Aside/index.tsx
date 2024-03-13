import ActiveCard from "./ActiveCard";
import Navigator from "./Navigator";

export default function Aside() {
    return (
        <div className="w-fit flex flex-col gap-8">
            <Navigator/>
            <ActiveCard/> 
        </div>
    )
}