// Content.js
import './index.css';

const Body = () => {
    const playlists = [
        {
            id: 1,
            name: 'Chill Vibes',
            description: 'Relax and unwind with this collection of soothing tracks.',
        },{
            id: 2,
            name: 'Chill Vibes',
            description: 'Relax and unwind with this collection of soothing tracks.',
        },{
            id: 3,
            name: 'Chill Vibes',
            description: 'Relax and unwind with this collection of soothing tracks.',
        },{
            id: 4,
            name: 'Chill Vibes',
            description: 'Relax and unwind with this collection of soothing tracks.',
        },{
            id: 5,
            name: 'Chill Vibes',
            description: 'Relax and unwind with this collection of soothing tracks.',
        },
        {
            id: 6,
            name: 'Workout Jams',
            description: 'Get pumped up with these high-energy workout songs.',
        },
        {
            id: 7,
            name: 'Workout Jams',
            description: 'Get pumped up with these high-energy workout songs.',
        },
        {
            id: 8,
            name: 'Workout Jams',
            description: 'Get pumped up with these high-energy workout songs.',
        },
        {
            id: 9,
            name: 'Workout Jams',
            description: 'Get pumped up with these high-energy workout songs.',
        },{
            id: 10,
            name: 'Workout Jams',
            description: 'Get pumped up with these high-energy workout songs.',
        },
        // Add more playlists here
    ];

    const urlImage = "data:image/png;base64,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";

    return (
        <div className="content">
            <h3>Featured Playlists</h3>
            <div className="playlist-container">
                {playlists.map((playlist) => (
                    <div key={playlist.id} className="playlist">
                        <img src={urlImage} alt={playlist.name} />
                        <h4>{playlist.name}</h4>
                        <p>{playlist.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;
