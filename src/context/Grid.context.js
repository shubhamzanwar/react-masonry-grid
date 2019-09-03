import React from 'react';

export const GridContext = React.createContext({});

export const GridContextProvider = ({children, ...props}) => {
    return (
        <GridContext.Provider {...props}>
            {children}
        </GridContext.Provider>
    )
}