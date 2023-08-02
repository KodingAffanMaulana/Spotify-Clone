// Content.js
import Card from '../Card/Card';
import React, { useContext } from 'react';
import './index.css';
import { Context } from '../../MyContext';

const Body = () => {
    const { tracks } = useContext(Context);
    return (
        <div className='pt-4'>
            <h1>Playlist Spotify</h1>
            <div className='grid grid-cols-5 gap-5'>
                {tracks.map((track) => {
                    return (
                        <Card key={track.album.id} track={track} />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
