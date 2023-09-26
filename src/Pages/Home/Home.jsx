import { useState } from "react";
import AllData from "../../Components/ALLData/AllData";
import Banner from "../../Header/Banner/Banner";


const Home = () => {
    const [val,setVal] = useState('')
    
    return (
        <div>
            <Banner val={val} setVal={setVal}></Banner>
            <AllData val={val}></AllData>

        </div>
    );
};

export default Home;