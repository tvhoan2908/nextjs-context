import { useContext, createContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    let sharedState = {
        count: 0
    };

    return (
        <AppContext.Provider value>
            {children}
        </AppContext.Provider>
    );
}