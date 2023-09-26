import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const [donationPercentage,setDonationPercentage] = useState(0)
    const [totalPercentage,settotalPercentage] = useState(0)
    const data = useLoaderData(0)
    
    console.log(donationPercentage,totalPercentage);
    useEffect(()=>{
        const fromLocalStorage = JSON.parse(localStorage.getItem('addedDonationList'));
        if(fromLocalStorage){
            const donation = (fromLocalStorage.length/data.length)*100
            setDonationPercentage(donation)
            const total = 100-donation
            settotalPercentage(total)
        }
    },[])
    return (
        <div className='h-[63vh] my-9 flex flex-col items-center justify-center '>
            <h1 className='text-xl font-bold text-amber-600 mb-7'>Donation Chart</h1>
           <Chart
           
           type="pie"
           width={700}
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
    );
};

export default Statistics;
