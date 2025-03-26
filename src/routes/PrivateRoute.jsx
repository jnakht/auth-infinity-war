import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'>Login</Navigate>
};

export default PrivateRoute;