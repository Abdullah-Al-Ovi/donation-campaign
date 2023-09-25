import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Components/DonationDetails/DonationDetails";


const Router = createBrowserRouter([
    {
        path : '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/donation',
                element: <Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path: '/donations/:donation_id',
                element: <DonationDetails></DonationDetails>,
                loader: ()=>fetch('/data.json')
            }
        ]
    }
])

export default Router;