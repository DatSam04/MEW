import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Home.css";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MovieItem from "../components/MovieItem";
import MoreInfo from "../components/moreInfo";
import animeList from "../assets/TestingData/animeList";
import heroSectionMovie from "../assets/TestingData/heroSectionMovie";
import { useMovie } from "../components/MovieContext";


function Movies_Page(){
    const navigate = useNavigate();
    const [heroSectionInfo, setHeroSectionInfro] = useState(heroSectionMovie[1]);

    const [movieItems, setmovieItems] = useState(animeList)
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Watching Movie Data
    const { setCurMovieContext } = useMovie();

    function handleMoreInfoClick(movie){
        setScrollPosition(window.scrollY);
        setSelectedMovie(movie);
        setShowMoreInfo(true);
    }

    function handleClose(){
        setShowMoreInfo(false);
        setSelectedMovie(null);
    }

    useEffect(() => {
        if (showMoreInfo) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
    }, [showMoreInfo]);
    return(
        <div className="HomePage">
            <NavBar />
            {/* <HeroSection
                title={heroSectionInfo.title}
                description={heroSectionInfo.description}
                img={heroSectionInfo.img}
                handleMoreInfoClick={() => handleMoreInfoClick(heroSectionMovie[1])}
                handleClose={handleClose}
                scrollPosition={scrollPosition}
                selectedMovie={selectedMovie}
                page="Movies"
            /> */}

            <div className="movieItemList" style={{paddingTop: "10vh"}}>
                {movieItems.map((movieItem) => {
                    return(
                        <MovieItem
                            movie={movieItem}
                            title={movieItem.title}
                            key={movieItem.title}
                            id={movieItem.title}
                            description={movieItem.description}
                            types={movieItem.type}
                            img={movieItem.img}
                            infoImg={movieItem.infoImg}
                            setCurMovieContext={setCurMovieContext}
                            handleMoreInfoClick={() => handleMoreInfoClick(movieItem)}
                            handleClose={handleClose}
                            scrollPosition={scrollPosition}
                            selectedMovie={selectedMovie}
                        />
                    );
                })}
            </div>
            {/* More Info Section */}
            {showMoreInfo && (
                <MoreInfo
                    title={selectedMovie.title}
                    key={selectedMovie.title}
                    maturityRating={selectedMovie.maturityRating}
                    infoImg={selectedMovie.infoImg}
                    year={selectedMovie.year}
                    season={selectedMovie.season}
                    description={selectedMovie.description}
                    cast={selectedMovie.cast}
                    genres={selectedMovie.genres}
                    types={selectedMovie.type}
                    handleClose={handleClose}
                    scrollPosition={scrollPosition}
                />
            )}
        </div>
    );
}

export default Movies_Page;