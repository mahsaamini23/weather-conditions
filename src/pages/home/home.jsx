import React,{useState} from "react";
import "./home.style.scss";
import PopularCity from "../../components/PopularCity/PopularCity";
import Search from "../../components/Search/Search";
import City from "../../components/City/City";
import Reducer from "../../reducer/reducer";


const Home=()=>{
    const [search , setSearch] = useState("")
    return(
        <div className="home">
            <Search setSearch={setSearch}/>
            <PopularCity/>
            <City search={search}/>
            {/* <Reducer/> */}
        </div>
    )
}

export default Home;