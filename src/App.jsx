import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from "./components/MovieContext";

// Pages Route
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Movies_Page from "./pages/Movies";
import Favorite from "./pages/Favorite";
import WatchingMovie from "./pages/WatchingMovie";
import Profile from "./pages/Profile";

function App(){
    return(
        <div>
            <MovieProvider>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/ForgotPassword" element={<ForgotPassword />} />
                    <Route path="/Anime" element={<Anime />} />
                    <Route path="/Movies" element={<Movies_Page />} />
                    <Route path="/Favorite" element={<Favorite />} />
                    <Route path="/WatchingMovie" element={<WatchingMovie />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </MovieProvider>
        </div>
    );
}

export default App;