import { Routes, Route } from 'react-router-dom'
import Recomendation from './Routes/Recomendation/Recomendation';
import Home from './Routes/Home/Home';
import NotFound from './Routes/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recomendation" element={<Recomendation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
