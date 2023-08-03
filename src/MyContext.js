import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [tracks, setTracks] = useState([]);
    const [access_token, set_access_token] = useState(null);
    const [recomends, setRecomen] = useState([]);
    return (
        <Context.Provider value={{ tracks, setTracks, access_token, set_access_token, recomends, setRecomen }}>
            {children}
        </Context.Provider>
    );
};