import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
       return  createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {user, createUser, logInUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;