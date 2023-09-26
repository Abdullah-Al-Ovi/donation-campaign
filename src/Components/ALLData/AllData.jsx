import { useEffect, useState } from "react";
import Data from "./Data/Data";
import swal from 'sweetalert';

const AllData = ({val}) => {
    
    const [allData,setAllData] = useState([])
    const [displayData,setDisplayData] = useState([])
    
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setAllData(data))
    },[])

    useEffect(()=>{
        if(val){
           const regEx = new RegExp(val.split('').join('.*'))
           const display= allData.filter((data)=>regEx.test(data.category.toLowerCase()))
           
           
           if(display.length === 0){
            setDisplayData(allData)
            swal("No matched data!","Please search by category correctly in lowercase or uppercase.", "error");
           }
           else{
                setDisplayData(display)
           }
        }
        else{
            setDisplayData(allData)
        }
    },[val,allData])
    return (
        <div className="w-[90%] mx-auto my-11 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                displayData?.map((data,idx)=><Data key={idx} 
                data={data}
                ></Data>)
            }
        </div>
    );
};

export default AllData;
