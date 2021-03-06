import React, { createContext, useReducer } from 'react';

const initialState = {
    count: 0
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "increment":
                return {
                    ...state,
                    count: state.count + 1
                }
            case "decrement":
                return {
                    ...state,
                    count: state.count -1
                }
            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }