import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { app } from './firebaseConfig.js'; 

export const useFirebaseAuth = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [auth]);

    const signIn = () => {
        signInWithPopup(auth, provider).catch(error => console.error(error));
    };

    const signOutUser = () => {
        signOut(auth).catch(error => console.error(error));
    };

    return { user, signIn, signOutUser };
};
