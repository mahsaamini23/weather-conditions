import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import popularCities from "../../data/cities/cities";
import axios from "axios";
import "./singlePageCity.style.scss";
import SingleCity from "../../components/SingleCity/SingleCity";


const client = axios.create({
    baseURL : `http://api.openweathermap.org/data/2.5`,
    
})
    
const SinglePageCity=()=>{
    
    const {cityId} = useParams();
    const [state, setState] = useState(true)
    const [detail , setDetail] = useState()

    // useEffect(()=>{
    //     setState(popularCities.filter(item=>item.id === Number(cityId))[0]);
    // },[])
    
    const handleGetData = async()=>{
        const response = await client.get(`/forecast?id=${cityId}&lang=fa&appid=f6878e2f0ae47648aa1c87140736927d`)
        .then(res=>res.data)
        if(response.cod==="200"){
            setDetail(response)
        } 
    }
    
    
    
    useEffect(()=>{
        if(detail?.list?.length){
          setState(false)
        }
    },[detail])

    useEffect(()=>{ 
        handleGetData()
    },[])
    
    if(state){
        return <div>pending</div>
    }

    return(
        <SingleCity detail={detail}/>
    )
}

export default SinglePageCity;