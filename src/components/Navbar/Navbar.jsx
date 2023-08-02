import { Link } from 'react-router-dom';
import React from "react";
import "./Navbar.css"

const Navbar = () => {
    const imageUrl = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
    return (
        <div className="navbar rounded-xl px-4 py-4 bg-[#0E0E0E]">
            <img className="logo" src={imageUrl} alt="Spotify Logo" />
            <ul className="gap-[40px]">
                <Link to='/'>My Playlist</Link>
                <Link to='/recomendation'>Recomendation</Link>
                <Link to='/'>Podcast</Link>
            </ul>
        </div>
    );
};

export default Navbar;
