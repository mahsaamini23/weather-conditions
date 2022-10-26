import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/home/home";
import SinglePageCity from "../pages/singlePageCity/singlePageCity";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
        {
            index:true,
            element:<Home/>
        },
        
    ]},
    {
        path:"singlePageCity/:cityId",
        element:<SinglePageCity/>
    },

])

export default router;