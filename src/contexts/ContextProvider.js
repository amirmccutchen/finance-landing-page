import React, { createContext, useContext, useState } from 'react';

// makes use of react context api

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ( { children } ) => {
    const [activeMenu, setActiveMenu] = useState(true);

    // handleClick is for navbar buttons, handles the clicked/unclicked state of the button and adjusts content accordingly

    const [isClicked, setIsClicked] = useState(initialState)

    function handleClick(clicked) {
        setIsClicked({ ...initialState, [clicked]: true });
    }

    return (
        <StateContext.Provider
        value = {{ 
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);