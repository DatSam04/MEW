import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Home.css";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MovieItem from "../components/MovieItem";
import MoreInfo from "../components/moreInfo";
import movieList from "../assets/TestingData/movieList";
import heroSectionMovie from "../assets/TestingData/heroSectionMovie";
import { useMovie } from "../components/MovieContext";

function Home(){
    const navigate = useNavigate();
    const [heroSectionInfo, setHeroSectionInfro] = useState(heroSectionMovie[0]);

    const [movieItems, setmovieItems] = useState(movieList)
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
        <div className={`HomePage ${showMoreInfo ? "blurred" : ""}`}>
            <NavBar />
            <HeroSection
                movie={heroSectionMovie[0]}
                title={heroSectionInfo.title}
                description={heroSectionInfo.description}
                img={heroSectionInfo.img}
                setCurMovieContext={setCurMovieContext}
                handleMoreInfoClick={() => handleMoreInfoClick(heroSectionMovie[0])}
                handleClose={handleClose}
                scrollPosition={scrollPosition}
                page="Home"
            />
            <div className="movieItemList">
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

export default Home;