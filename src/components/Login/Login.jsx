const LoginButton = () => {
    let client_id = 'c91f77a552f446fab17c4d71b93d717c';
    let scope = 'playlist-modify-private';
    let redirect_uri = 'http://localhost:3000';

    let spotify_url = 'https://accounts.spotify.com/authorize';
    spotify_url += '?response_type=token';
    spotify_url += '&client_id=' + encodeURIComponent(client_id);
    spotify_url += '&scope=' + encodeURIComponent(scope);
    spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    return (
        <a href={spotify_url} className="bg-spotify_main hover:bg-gray-600 w-60 rounded-full text-white font-medium px-1 py-1 flex cursor-pointer justify-center align-middle">
            LOG IN
        </a>
    );
}

export default LoginButton;