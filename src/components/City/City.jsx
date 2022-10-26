import React,{useState} from "react";
import cities from "../../data/cities/cities";
import "./city.style.scss";
import { Link } from "react-router-dom";

const City =(props)=>{
    const [city, setCity] = useState(cities)
    // console.log(city[0].name);
    return(
        <div className="city">
            {city.filter(item => props.search === '' ? item : item.name.includes(props.search))
            .map(city => (
                <div className="city_card" key={city.id}>
                    <p className="city_name">{city.name}</p>
                    <Link to={`/singlePageCity/${city.id}`}>
                        <p className="link">{"اطلاعات بیشتر"}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default City;