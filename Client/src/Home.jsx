import Banner from "./Banner";
import LatestCollection from "./LatestCollection";
import MiddleSection from "./MIddleSection";

export default function Home(){
    return(
        <div className="bg-[#ffd5df]">
        <Banner/>
        <LatestCollection/>
        <MiddleSection/>
        </div>
    )
}