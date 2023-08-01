import React from "react";
import "./header.css"

const header = () => {
    const imageUrl = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
    return (
        <>
            <div className="navbar">
                <img className="logo" src={imageUrl} alt="Spotify Logo" />
                <ul>
                    <li className="hover">Home</li>
                    <li>Browse</li>
                    <li>Radio</li>
                </ul>
            </div>
        </>
    );
};

export default header;
