import React from 'react'

const Card = ({track}) => {
    return (
        <div className='cursor-pointer hover:bg-spotify_card_hover px-5 py-5 rounded mr-4 mb-4'>
            <div className=''>
                <img src={track.album.images[0].url} title={track.album.name} alt={`${track.album_name}`} className="object-cover rounded h-40 w-full" />
                <p className="text-base mt-2 mb-1 font-bold text-gray-100">{track.name}</p>
                <div>
                    <p className="text-sm text-gray-300">{track.album.release_date.slice(0, 4)} • {track.album.artists[0].name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card