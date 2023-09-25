import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const DonationDetails = () => {

    const [donation,setDonation] = useState({})
    const {donation_id} = useParams()
    
    const donations = useLoaderData()
    const text_color = donation.text_color
    
    
    useEffect(()=>{
        
        const findData = donations.find(data=>data.donation_id === donation_id)
       setDonation(findData);
      
        
    },[donation,donation_id,donations])

    const handleLocalStorage =()=>{
        const donationList =[]
        const fromLocalStorage = JSON.parse(localStorage.getItem('addedDonationList'))
        if(!fromLocalStorage){
            donationList.push(donation)
            localStorage.setItem("addedDonationList",JSON.stringify(donationList))
            
            swal("Successfully donated!", "Thanks for spreading love.", "success");
        }
        else{
            const isExist = fromLocalStorage.find(data=>data.donation_id === donation_id)
            // console.log(isExist.title,fromLocalStorage);
            if(isExist){
               
                swal("Already donated in this sector!","Please try the remaining.", "error");
            }
            else{
                donationList.push(...fromLocalStorage,donation)
                localStorage.setItem("addedDonationList",JSON.stringify(donationList))
                swal("Successfully donated!", "Thanks for spreading love.", "success");
            }
        }
    }
    

    return (
        <div className="w-[70%]  mx-auto my-7 ">
             
             <div className="w-full relative">
      <div className="flex justify-center mb-3">
        <img className="w-full" src={donation.image} alt={donation.title} />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-black opacity-60"></div>
        
        {/* Button Container */}
        <div className="absolute bottom-3 left-3">
          <button onClick={handleLocalStorage}
            className="p-1 text-white font-medium rounded"
            style={{ backgroundColor: text_color }}
          >
            Donate ${donation.price}
          </button>
        </div>
      </div>

      {/* <div className="">
        <h2 className="text-2xl font-bold mb-3">{donation.title}</h2>
        <p className="text-[#0B0B0BB2]">{donation.description}</p>
      </div> */}
      
    </div>
    <div className="">
        <h2 className="text-2xl font-bold mb-3">{donation.title}</h2>
        <p className="text-[#0B0B0BB2]">{donation.description}</p>
      </div>
             
        </div>
    );
};

export default DonationDetails;

