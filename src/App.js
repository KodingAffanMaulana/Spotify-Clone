import { Routes, Route } from 'react-router-dom'
import Recomendation from './Routes/Recomendation/Recomendation';
import Home from './Routes/Home/Home';
import NotFound from './Routes/NotFound';
import Auth from './Routes/Auth/Auth';
import CreatePlaylist from './Routes/Playlist/CreatePlaylist';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recomendation" element={<Recomendation />} />
        <Route path="/create" element={<CreatePlaylist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
