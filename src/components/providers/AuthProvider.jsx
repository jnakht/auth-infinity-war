import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const createUser = (email, password) => {
        setIsLoading(true);
       return  createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }
    const LogInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('observing user: ', currentUser);
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => {
            unSubscribe();
        }
    } ,[])
    const authInfo = {user, 
        createUser, 
        logInUser, 
        logOut,
        LogInWithGoogle,
        isLoading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;