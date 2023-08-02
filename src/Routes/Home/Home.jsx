import { useEffect, useContext } from 'react';
import { Context } from '../../MyContext'
import '../Home/Home.css';
// import Form from '../../components/Form/Form'
import Sidebar from '../../components/Sidebar/Sidebar';
import LoginButton from '../../components/Login/Login';
import Navbar from '../../components/Navbar/Navbar';
import Body from '../../components/Body/Body';

const Home = () => {
    const { access_token, set_access_token } = useContext(Context);

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
    });

    return (
        <>
            {(!access_token) && (
                <div className="bg-[#0E0E0E] app flex justify-center items-center">
                    <div className='flex justify-center items-center'>
                        <LoginButton />
                    </div>
                </div>
            )}

            {(access_token) && (
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
            )}
        </>
    );
}

export default Home;
