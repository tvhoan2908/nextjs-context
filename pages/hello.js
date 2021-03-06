import { useContext, useReducer } from 'react';
import { store } from '../stores';

export default function HelloScreen() {
    const globalState = useContext(store);
    console.log(globalState);
    return (
        <h1>{ globalState.state.count }</h1>
    );
}