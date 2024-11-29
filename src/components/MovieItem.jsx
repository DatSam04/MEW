import React, { useState } from "react";
import "../assets/styles/movieItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function MovieItem(props){
    const navigate = useNavigate();

    function handlePlayMovie(){
        props.setCurMovieContext(props.movie);
        navigate('/WatchingMovie')
    }
    return(
        <div className={`movieItem`}>
            <img className="movieItemBackground" src={props.img} />
            <div className="movieItemInfo">
                <div>
                    <div className="movieItemBtn moviePlayBtn" onClick={handlePlayMovie}>
                        <FontAwesomeIcon className="playBtnIcon" icon={faPlay} />
                    </div>
                    {/* Add to favorite list */}
                    <div className="movieItemBtn" role="button" tabIndex="0">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    {/* description, cast, episode, .. */}
                    <div
                        className="movieItemBtn moreInfoBtn"
                        role="button"
                        tabIndex="0"
                        onClick={props.handleMoreInfoClick}
                    >
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>

                <div className="movieItemGenres">
                    {props.types.map((type, index) => {
                        return(
                            <div>{type}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MovieItem;