import { useContext, useEffect, useReducer, useState } from 'react';
import { store } from '../stores';
import { obsService } from '../observables';
import { useRouter } from 'next/router';

export default function HelloScreen() {
    const globalState = useContext(store);
    console.log(globalState);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const userSub = obsService.getUser().subscribe(newUser => {
            console.log("hello", newUser);
            if (newUser !== null) {
                setUser(newUser);
            }
        });
        return () => userSub.unsubscribe();
    }, []);

    return (
        <>
            <h1>{ globalState.state.count }</h1>
            <h2>{user?.name}</h2>
            <button onClick={() => obsService.updateUser({ name: "Hoan Trinh 21" })}>Update User</button>
            <button onClick={() => router.back()}>Back Home</button>
        </>
    );
}