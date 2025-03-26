import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    return (
        <div>
            <h3>This is home components: {authInfo}</h3>
        </div>
    );
};

export default Home;