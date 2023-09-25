import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";


const Donation = () => {

    const [donationList,setDonationList] = useState([])
    const [seeMore,setSeeMore] = useState(false)
    const [isHidden,setIsHidden] = useState(true)

    const handleSee=()=>{
        setSeeMore(!seeMore)
    }

    
    useEffect(()=>{
        const fromLocalStorage = JSON.parse(localStorage.getItem('addedDonationList'))
        setDonationList(fromLocalStorage)
        
    },[])
    return (
       <div>
         <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto my-7 gap-3">
           {
              seeMore ?  donationList.map((donation,idx)=><DonationCard key={idx} donation={donation}></DonationCard>)
              :
              donationList.slice(0,4).map((donation,idx)=><DonationCard key={idx} donation={donation}></DonationCard>)
           }
        </div>
        <div className="text-center mb-7">
        {
            <button onClick={handleSee} className={`p-[5px] rounded bg-orange-400 text-white ${donationList.length > 4 || "hidden"} font-medium `}>{seeMore ? "See less" : "See All"} </button>
        }
        </div>
       </div>
    );
};

export default Donation;
