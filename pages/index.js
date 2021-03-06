import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { useContext, useEffect, useReducer, useState } from 'react';
import { useRouter } from 'next/router';
import { store } from '../stores';
import { obsService } from '../observables';

export default function Home() {
 const globalState = useContext(store);
 const { dispatch, state } = globalState;
 const router = useRouter();
 const [user, setUser] = useState(null);


 useEffect(() => {
  const userSub = obsService.getUser().subscribe(newUser => {
    if (newUser !== null) {
      setUser(newUser);
    }
  })
  
  return () => userSub.unsubscribe();
 }, []);

 const fetchUser = () => {

 }

  return (
    <>
      Count: { state.count }<br />
      <h2>{user?.name}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button><br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button><br />
      <button onClick={() => router.push('/hello')}>Go to hello screen</button>
      <button onClick={() => obsService.updateUser({ name: "Hoan Trinh" })}>Send By Exjs</button>
    </>
  )
}
