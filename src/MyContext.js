import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [tracks, setTracks] = useState([]);
    const [access_token, set_access_token] = useState(null);
    return (
        <Context.Provider value={{ tracks, setTracks, access_token, set_access_token }}>
            {children}
        </Context.Provider>
    );
};