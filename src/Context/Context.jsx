import React, { createContext } from 'react';
export const ContextApi = createContext();
const Context = (props) => {
    const contextValue = {

    }
    return (
        <ContextApi.Provider value={contextValue}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default Context;