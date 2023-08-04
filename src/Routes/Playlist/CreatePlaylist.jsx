import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../MyContext';

const CreatePlaylist = () => {
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    const { access_token } = useContext(Context);

    const handleCreatePlaylist = async () => {
        try {
            let url = 'https://api.spotify.com/v1/users/84a9458f8f98413b899e7ea109593848/playlists';

            let playlistData = {
                name: playlistName,
                description: playlistDescription,
                public: isPublic
            };

            const response = await axios.post(url, playlistData, {
                headers: {
                    'Authorization': 'Bearer ' + access_token,
                    'Content-Type': 'application/json'
                },
            });

            console.log('Playlist created successfully:', response.data);
        } catch (err) {
            console.error('Error creating playlist:', err);
        }
    };

    return (
        <div>
            <label htmlFor="playlistName">Playlist Name:</label>
            <input
                type="text"
                id="playlistName"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
            />

            <label htmlFor="playlistDescription">Playlist Description:</label>
            <input
                type="text"
                id="playlistDescription"
                value={playlistDescription}
                onChange={(e) => setPlaylistDescription(e.target.value)}
            />

            <label htmlFor="isPublic">Public:</label>
            <input
                type="checkbox"
                id="isPublic"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
            />

            <button onClick={handleCreatePlaylist}>Create Playlist</button>
        </div>
    );
};

export default CreatePlaylist;
