// Content.js
import Card from '../Card/Card';
import './index.css';

const Body = ({ tracks }) => {
    return (
        <div>
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
