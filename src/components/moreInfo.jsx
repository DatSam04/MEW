import React from "react";
import "../assets/styles/moreInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faX } from '@fortawesome/free-solid-svg-icons';

function moreInfo(props){
    console.log(props);
    return(
        <div className="moreInfoSection" style={{top: `${props.scrollPosition + window.innerHeight / 2}px`}}>
            <div className="infoHead">
                <img className="infoHeadImg" src={props.infoImg} />
                <div className="moreInfoSectionButton">
                    <div className="movieinfoBtn moveInfoPlayBtn" role="button" tabIndex="0">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    {/* Add to favorite list */}
                    <div className="movieinfoBtn movieInfoFavBtn" role="button" tabIndex="0">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="closeButton" onClick={props.handleClose}>
                    <FontAwesomeIcon icon={faX} />
                    </div>
                </div>
            </div>

            <div className="infoBody">
                <div className="infoBodyLeft">
                    <div className="movieYear">{props.year}</div>
                    <div className="movieSeason">{props.season}</div>
                    <div className="movieDescription">{props.description}</div>
                </div>
                <div className="infoBodyRight">
                    <div className="movieCast">Cast:
                        {props.cast.map((curCast, index) => {
                            return(
                                <div className="infoBodyRightText">
                                    {curCast}{index !== (props.cast.length - 1) ? "," : ""}
                                </div>
                            );
                        })}
                    </div>
                    <div className="movieGenres">Genres:
                        {props.genres.map((genre, index) => {
                            return(
                                <div className="infoBodyRightText">
                                    {genre}{index !== (props.genres.length - 1) ? "," : ""}
                                </div>
                            );
                        })}
                    </div>
                    <div className="movieTypes">Types:
                        {props.types.map((type, index) => {
                            return(
                                <div className="infoBodyRightText">
                                    {type}{index !== (props.types.length - 1) ? "," : ""}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default moreInfo;