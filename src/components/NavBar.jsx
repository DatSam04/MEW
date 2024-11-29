import React from "react";
import MEW from "../assets/Logo/MEW_logo.png";
import "../assets/styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function NavBar(props){
    const navigate = useNavigate();

    return(
        <nav className="navBar">
            <div className="navBarLeft">
                <img
                    className="navBar_logo"
                    src={MEW}
                    onClick={() => navigate('/Home')}
                    style={{cursor: "pointer"}}
                />
                <div name="Home" className="navBarBtn" onClick={() => navigate('/Home')}>Home</div>
                <div name="TV_Shows" className="navBarBtn" onClick={() => navigate('/Anime')}>Anime</div>
                <div name="Movies" className="navBarBtn" onClick={() => navigate('/Movies')}>Movies</div>
                <div name="Favorite" className="navBarBtn" onClick={() => navigate('/Favorite')}>Favorite</div>
            </div>
            <div className="navBarRight">
                <div className="searchBar">
                    <div className="searchIcon"><FontAwesomeIcon icon={faSearch} /></div>
                    <input type="text" placeholder="Titles, people, genres" value={props.searchText} />
                </div>
                <div className="profileIcon"><FontAwesomeIcon icon={faUser} /></div>
            </div>
        </nav>
    );
}

export default NavBar;