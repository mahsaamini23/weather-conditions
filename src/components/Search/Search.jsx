import React from "react";
import "./search.style.scss";
import searchIcon from "../../assets/images/icon-search.png";

const Search =(props)=>{
    return(
        <div className="search_container">
            <div className="search">
                <div>
                    <img  className="search_icon" src={searchIcon} alt={"search"}></img>
                </div>
                <input className="search_input" type="search" onChange={(e)=>props.setSearch(e.target.value)} />
            </div>
        </div>
    )
}

export default Search;