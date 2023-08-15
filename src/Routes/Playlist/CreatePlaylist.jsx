import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../MyContext';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

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
            <div className="bg-[#242424] min-h-screen app">
                <div className="main">
                    <div className="content">
                        <Navbar />
                        <div className='rounded-xl px-4 bg-[#0E0E0E] mt-2 text-white w-full sm:h-[630px] flex flex-col justify-center items-center'>
                            <div className='flex flex-col sm:w-[600px] gap-4'>
                                <label htmlFor="playlistName">Playlist Name:</label>
                                <input
                                    className='w-full py-2 text-black text-center'
                                    type="text"
                                    id="playlistName"
                                    value={playlistName}
                                    onChange={(e) => setPlaylistName(e.target.value)}
                                />

                                <label htmlFor="playlistDescription">Playlist Description:</label>
                                <input
                                    className='w-full py-2 text-black text-center'
                                    type="text"
                                    id="playlistDescription"
                                    value={playlistDescription}
                                    onChange={(e) => setPlaylistDescription(e.target.value)}
                                />

                                <div className='flex gap-4'>
                                    <label htmlFor="isPublic">Public:</label>
                                    <input
                                        className='text-black'
                                        type="checkbox"
                                        id="isPublic"
                                        checked={isPublic}
                                        onChange={(e) => setIsPublic(e.target.checked)}
                                    />
                                </div>
                                <button className='bg-green-500 rounded-lg px-4 py-3' onClick={handleCreatePlaylist}>Create Playlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylist;
