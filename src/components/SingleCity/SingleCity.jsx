import React from "react";
import icon from "../../assets/images/icon-sunny.png";


const SingleCity =({detail})=>{
    const Array = [];
    for(let i=0; i<4 ; i++ ){
        Array.push(detail.list[i])
    }
    console.log(Array)

    const Arr = {Array}
    console.log(Arr)
    return(
        <div>
            <div className="city_container">
                    <div className="city_title">
                        <p className="city_name">{detail.city.name}</p>
                        <p className="city_data">{"امروز"}</p>
                     </div>
                    <div className="city_weather">
                        <div className="city_state_weather">
                            <div>
                                <img className="icon_weather" src={icon} alt="state weather"></img>
                            </div>
                            <div style={{lineHeight:"2rem"}}>
                                <h2>{detail.list[0].main.temp}</h2>
                                <p style={{display:"flex",justifyContent:"flex-end"}}>{detail.list[0].weather[0].description}</p>
                            </div>
                        </div>
                        <div className="city_state_details">
                            <div>
                                <p>{"رطوبت هوا :"}{detail.list[0].main.humidity}</p>
                                <p>{"سرعت باد :"}{detail.list[0].wind.speed}</p>
                            </div>
                            <div>
                                <p>{"فشار هوا :"}{detail.list[0].main.pressure}</p>
                                <p>{"میزان دید :"}{detail.list[0].visibility}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="city_state_times_container">
                        <h3>{"ساعتی"}</h3>
                        <div className="city_state_times">
                            <div className="state_hourly"></div>
                        </div>
                    </div> */}
                    <div className="city_state_daily_container">
                        <h3>{"روزانه"}</h3>
                        <div className="city_state_daily">
                            {Array.map((item , index)=>( 
                                <div key={index} className="state_daily"> 
                                    <div><img  src={icon} alt="" /></div>
                                    <div>{item.dt_txt}</div> 
                                    <div>{item.main.temp}</div>
                                    <div>{item.wind.speed}</div>
                                    <div>{item.main.pressure}</div> 
                                </div>
                            ))}    
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SingleCity;