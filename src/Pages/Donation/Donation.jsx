import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";


const Donation = () => {

    const [donationList,setDonationList] = useState([])
    const [seeMore,setSeeMore] = useState(false)
    const [noDonation,setNoDonation] = useState(false)
    
   
    const handleSee=()=>{
        setSeeMore(!seeMore)
    }

    
    useEffect(()=>{
        const fromLocalStorage = JSON.parse(localStorage.getItem('addedDonationList'))
        if(fromLocalStorage){
            setDonationList(fromLocalStorage)
        }
        else{
            setNoDonation(true)
        }
    },[])
    return (
       <div>
         {
            noDonation ? 
            <div className="h-[67vh] flex flex-col justify-center items-center">
                <h1 className="text-3xl text-red-500 font-bold text-center">Not donated yet?</h1>
                <h1 className="text-3xl text-violet-500 font-bold text-center">Your small contribution can bring joy 😊 </h1>
            </div>
            :
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%]  md:w-[60%] lg:w-[80%] mx-auto my-7 gap-5">
           {
              seeMore ?  donationList?.map((donation,idx)=><DonationCard key={idx} donation={donation}></DonationCard>)
              :
              donationList?.slice(0,4).map((donation,idx)=><DonationCard key={idx} donation={donation}></DonationCard>)
           }
        </div>
        <div className="text-center mb-7">
        {
            <button onClick={handleSee} className={`p-[5px] rounded bg-orange-400 text-white ${donationList?.length > 4 || "hidden"} font-medium `}>{seeMore ? "See less" : "See All"} </button>
        }
        </div>
            </div>
         }
       </div>
    );
};


export default Donation;
