import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const [donationPercentage,setDonationPercentage] = useState(0)
    const [totalPercentage,settotalPercentage] = useState(100)
    const data = useLoaderData(0)
    
   
    useEffect(()=>{
        const fromLocalStorage = JSON.parse(localStorage.getItem('addedDonationList'));
        if(fromLocalStorage){
            const donation = (fromLocalStorage.length/data.length)*100
            setDonationPercentage(donation)
            const total = 100-donation
            settotalPercentage(total)
        }
    },[data.length])
    return (
        <div className='h-[67vh] my-9 flex flex-col items-center justify-center  '>
            <h1 className='text-xl font-bold text-amber-600 mb-7'>Donation Chart</h1>
           <div className='w-full max-w-lg'>
           <Chart
           
           type="pie"
           
           height = {300}
           series = {[donationPercentage,totalPercentage]}
           options ={{
            
            noData: {
                text: "Not donated yet",
                align: 'center',
                verticalAlign: 'middle',
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: "#FF444A" ,
                  fontSize: '2.5rem',
                  
                }
                
              },
            colors:["#00C49F","#FF444A"],
            labels:["Your donation","Total Donation"]
            
           }}
           >
             
           </Chart>
           </div>
        </div>
    );
};

export default Statistics;
