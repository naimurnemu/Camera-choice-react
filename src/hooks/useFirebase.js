import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

//  initialize firebase
initializeAuthentication();

// firebase Auth
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // sign in by google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setIsLoading(true);
                setUser(result.user);
                setError("");
            })
            .catch((issue) => setError(issue.message))
            .finally(() => setIsLoading(false));
    };

    // user Auth observe
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, []);

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setIsLoading(true);
                setUser({});
                setError("");
            })
            .catch((issue) => setError(issue.message))
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        isLoading,
        error,
        signInWithGoogle,
        logOut,
    };
};

export default useFirebase;
