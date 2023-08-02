import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css"
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import { Context } from '../../MyContext';

const Navbar = () => {
    const [users, setUsers] = useState([])
    const { access_token } = useContext(Context);

    useEffect(() => {
        try {
            let url = 'https://api.spotify.com/v1/me';
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
            })
                .then(res => {
                    setUsers(res.data);
                })
        } catch (err) {
            console.error(err);
        }
    }, [access_token])

    const imageUrl = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'
    return (
        <div className="navbar rounded-xl px-4 py-4 bg-[#0E0E0E] flex justify-between">
            <div className='flex'>
                <img className="logo" src={imageUrl} alt="Spotify Logo" />
                <ul className="gap-[40px] items-center">
                    <Link to='/'>My Playlist</Link>
                    <Link to='/recomendation'>Recomendation</Link>
                    <Link to='/'>Podcast</Link>
                </ul>
            </div>
            <div className="avatar flex">
                <button className='flex gap-2 items-center'>
                    {/* <img src={users.images[0].url} alt='foto'/> */}
                    <CgProfile fontSize='30px' alt={users.display_name} />
                    <span className='items-center'>{users.display_name}</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
