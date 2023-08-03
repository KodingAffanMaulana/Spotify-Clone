// Content.js
import Card from '../Card/Card';
import React, { useContext, useEffect } from 'react';
import './index.css';
import { Context } from '../../MyContext';
import axios from 'axios';

const Body = () => {
    const { tracks, setTracks, access_token } = useContext(Context);

    useEffect(() => {
        try {
            let url = 'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA';
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
            })
                .then(res => {
                    setTracks(res.data.tracks);
                })
        } catch (err) {
            console.error(err);
        }
    }, [access_token, setTracks])

    return (
        <div className='pt-4'>
            <h1>Playlist Spotify</h1>
            <div className='grid grid-cols-5 gap-5'>
                {tracks.map((track) => (
                    <Card key={track.album} track={track} />
                ))}
            </div>
        </div>
    );
};

export default Body;
