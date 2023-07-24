// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='main'>
        <Sidebar className="sidebar" />
        <Body className="content" />
      </div>
    </div>
  );
}

export default App;
