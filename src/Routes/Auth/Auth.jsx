import React from 'react'
import { useContext, useEffect } from 'react';
import { Context } from '../../MyContext';
import LoginButton from '../../components/Login/Login';
import Home from '../Home/Home';

const Auth = () => {
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

        if (token) {
            localStorage.setItem('access_token', token);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {(!access_token) && (
                <div className="bg-black app flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-[200px] pb-4'
                            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                            alt=""
                        />
                        <LoginButton />
                    </div>
                </div>
            )}

            {(access_token) && (
                <Home />
            )}
        </>
    )
}

export default Auth