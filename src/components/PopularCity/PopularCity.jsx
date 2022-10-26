import React from "react";
import "./popularCity.style.scss";
import rainy from "../../assets/images/icon-rainy.png";
import temperature from "../../assets/images/icon-thermometer.png";
import wind from "../../assets/images/icon-wind.png";
import { Link } from "react-router-dom";
import popularCities from "../../data/popularCities/popularCities";

const PopularCity =()=>{
    

    return(
        <div className="card_container">
            {popularCities.map(item=>(
                <div key={item.id}>
                    <div  className="card_popular">
                        <div className="card_header">
                            <div className="header_name-city">
                                <p>{item.name}</p>
                            </div>
                            <div className="header_icon-city">
                                <img src={rainy} alt="rainy"/>
                            </div>
                        </div>
                        <div className="card_status-city">
                            {/* <p>status: rainy</p> */}
                            <div className="status-details">
                                <img className="temperature" src={temperature}  alt="temperature"></img>
                                <p>37 C</p>
                            </div>
                            <div className="status-details">
                                <img className="wind" src={wind} alt="speed wind"/>
                                <p>112</p>
                            </div>
                            <Link to={`/singlePageCity/${item.id}`}>
                            <button >4 day future</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PopularCity;