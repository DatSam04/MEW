import React, { useState, useEffect } from "react";
import "../assets/styles/Home.css";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MovieItem from "../components/MovieItem";
import MoreInfo from "../components/moreInfo";

function Favorite(){
    return(
        <div>
            <NavBar />
            {/* <h1>Favorite</h1> */}
        </div>
    );
}

export default Favorite;