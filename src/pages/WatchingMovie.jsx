import React, { useState, useEffect } from "react";
import "../assets/styles/MovieContext.css";
import NavBar from "../components/NavBar";
import { useMovie } from "../components/MovieContext";

function WatchingMovie(props){
    const { curMovieContext } = useMovie();
    return(
        <div>
            <NavBar />
            {curMovieContext ? (
                <div className="MovieContext">
                    <h1 className="curMovieTitle">{curMovieContext.title}</h1>
                    {/* Movie Video (Testing with image) */}
                    <div className="MovieContext_Container">
                        <img src={curMovieContext.infoImg} />
                        <div className="MovieContext_Bar">
                            <div className="MovieContext_Bar_Left">
                                <div>Play</div>
                                <div>Back</div> {/* go back 10 secs */}
                                <div>Forward</div> {/* go forward 10 secs */}
                                <div>Sound</div> {/*  */}
                            </div>

                            <div className="MovieContext_Bar_Right">
                                <div>Setting</div> {/* Setting options */}
                                <div>Expand</div> {/*  */}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="MovieContext">
                    <div>Movie data not available</div>
                </div>
            )}
        </div>
    );
}

export default WatchingMovie;