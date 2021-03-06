import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { useContext, useReducer } from 'react';
import { useRouter } from 'next/router';
import { store } from '../stores';

export default function Home() {
 const globalState = useContext(store);
 const { dispatch, state } = globalState;
 const router = useRouter();

  return (
    <>
      Count: { state.count }<br />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button><br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button><br />
      <button onClick={() => router.push('/hello')}>Go to hello screen</button>
    </>
  )
}
