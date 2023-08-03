import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Context } from '../../MyContext';
import Sidebar from '../../components/Sidebar/Sidebar';
import axios from 'axios';

const Recomendation = () => {
    const { recomends, setRecomen, access_token } = useContext(Context);

    useEffect(() => {
        if (recomends) {
            setRecomen([])
        }
        try {
            let url = 'https://api.spotify.com/v1/browse/featured-playlists';
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
            })
                .then(res => {
                    setRecomen(res.data.playlists.items);
                    console.log(res.data.playlists);
                })
        } catch (err) {
            console.error(err);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="bg-[#242424] min-h-screen app">
                <div className="main">
                    <Sidebar className="sidebar" />
                    <div className="content">
                        <Navbar />
                        <div className='rounded-xl px-4 bg-[#0E0E0E] mt-2 min-h-screen'>
                            <div className='pt-4'>
                                <h1>Recomendation Songs</h1>
                                <div className='grid grid-cols-5 gap-5'>
                                    {recomends.map((recomend) => (
                                        <div className='cursor-pointer hover:bg-spotify_card_hover px-5 py-5 rounded mr-4 mb-4'>
                                            <img src={recomend.images[0].url} title={recomend.name} alt='album' className="object-cover rounded h-40 w-full" />
                                            <p className="text-base mt-2 mb-1 font-bold text-gray-100">{recomend.name}</p>
                                            <div>
                                                <p className="text-sm text-gray-300">{recomend.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recomendation