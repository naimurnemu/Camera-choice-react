import axios from "axios";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
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
    const [admin, setAdmin] = useState("");

    // sign in by google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError("");
                // store google user
                const user = result.user;
                updateUser(user.email, user.displayName);

                const destination = location.state?.from || "/";
                history.replace(destination);
            })
            .catch((issue) => setError(issue.message))
            .finally(() => setIsLoading(false));
    };

    // Register by email and password
    const registerUserWithEmail = (email, Password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, Password)
            .then((result) => {
                setUser(result.user);
                setError("");
                const newUser = { email, displayName: name };
                setUser(newUser);

                //store user function
                storeUser(email, name);

                //name update
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch((issue) => setError(issue.message));
                history.replace("/home");
            })
            .catch((issue) => setError(issue.message))
            .finally(() => setIsLoading(false));
    };

    // login user with google
    const loginUserWithEmail = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("");
                const destination = location.state?.from || "/";
                history.replace(destination);
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
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
            })
            .catch((issue) => setError(issue.message))
            .finally(() => setIsLoading(false));
    };

    // Admin Authorization
    useEffect(() => {
        fetch(`https://polar-dusk-85924.herokuapp.com/users/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setAdmin(data.admin);
            });
    }, [user.email]);

    // Store user Information by registration
    const storeUser = (email, displayName) => {
        const user = { email, displayName };

        // user post by Axios
        axios
            .post("https://polar-dusk-85924.herokuapp.com/users", user)
            .then((res) => {
                if (res?.data?.acknowledged) {
                }
            });
    };

    // Store user Information by Google signIn
    const updateUser = (email, displayName) => {
        const user = { email, displayName };
        fetch("https://polar-dusk-85924.herokuapp.com/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return {
        user,
        admin,
        isLoading,
        error,
        signInWithGoogle,
        registerUserWithEmail,
        loginUserWithEmail,
        logOut,
    };
};

export default useFirebase;
