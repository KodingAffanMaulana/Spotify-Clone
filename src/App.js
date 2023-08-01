import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [access_token, set_access_token] = useState(null);
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
        LOG IN WITH SPOTIFY
      </a>
    );
  }

  function getHashParams() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    // eslint-disable-next-line no-cond-assign
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  useEffect(() => {
    let params = getHashParams()
    let token = params.access_token;
    set_access_token(token);
  }, []);

  return (
    <div className="bg-[#0E0E0E] min-h-screen app">
      {(!access_token) && (
        <LoginButton />
      )}

      {/* <Header /> */}
      <div className="bg-dark_main main">
        <Sidebar className="sidebar" />
        {(access_token) && (
          <div className="content">
            <Form access_token={access_token} />
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
