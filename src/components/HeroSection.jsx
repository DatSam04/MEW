import React from "react";
import "../assets/styles/heroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection(props){
    const navigate = useNavigate();

    function handlePlayMovie(){
        props.setCurMovieContext(props.movie);
        navigate('/WatchingMovie')
    }

    return(
        <section className="HeroSection">
            <div className="HeroBackground">
                {/* <video autoplay muted loop class="HeroBackgroundVideo" />
                <source src="trailer.mp4" type="video/mp4" /> */}
                <img className="HeroBackgroundVideo" src={props.img} />
            </div>

            {/* Description Overlay */}
            <div className="HeroContent">
                <h1 className="HeroTitle">{props.title}</h1>
                <p className="HeroDescription">{props.description}</p>
                <div className="HeroButtons">
                <button className="btn playButton" onClick={handlePlayMovie}>Play</button>
                <button className="btn infoButton" onClick={props.handleMoreInfoClick}>More Info</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;