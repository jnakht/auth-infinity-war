import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const {logInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userEmail, userPassword);

        // login with email and password
        logInUser(userEmail, userPassword)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" 
                                name='email'
                                className="input" placeholder="Email" 
                                required/>
                                <label className="fieldset-label">Password</label>
                                <input type="password" 
                                name='password'
                                className="input" placeholder="Password" 
                                required/>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Login</button>
                                <p>New Here? Please <Link className="text-bold text-primary text-base" to='/register'>Register</Link></p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;