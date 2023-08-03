import '../Home/Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Body from '../../components/Body/Body';

const Home = () => {
    return (
        <>
            <div className="bg-[#242424] min-h-screen app">
                <div className="main">
                    <Sidebar className="sidebar" />
                    <div className="content">
                        <Navbar />
                        <div className='rounded-xl px-4 bg-[#0E0E0E] mt-2 min-h-screen'>
                            <Body />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
