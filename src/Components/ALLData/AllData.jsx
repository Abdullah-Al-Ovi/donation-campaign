import { useEffect, useState } from "react";
import Data from "./Data/Data";


const AllData = () => {
    const [allData,setAllData] = useState([])
    useEffect(()=>{
        fetch('../../../public/data.json')
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[])
    return (
        <div className="w-[90%] mx-auto my-11 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                allData.map((data,idx)=><Data key={idx} 
                data={data}
                ></Data>)
            }
        </div>
    );
};

export default AllData;