import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [curMovieContext, setCurMovieContext] = useState(() => {
        const savedMovie = localStorage.getItem('selectedMovie');
        return savedMovie ? JSON.parse(savedMovie) : null;
    });

    useEffect(() => {
        if(curMovieContext){
            localStorage.setItem('selectedMovie', JSON.stringify(curMovieContext));
        }
    },[curMovieContext])

    return (
        <MovieContext.Provider value={{curMovieContext, setCurMovieContext}}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovie = () => useContext(MovieContext);