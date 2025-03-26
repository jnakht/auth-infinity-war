import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userName, userEmail, userPassword);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" 
                                name='name'
                                className="input" placeholder="Name" 
                                required/>
                                <label className="fieldset-label">Email</label>
                                <input type="email"  
                                name="email"
                                className="input" placeholder="Email" 
                                required/>
                                <label className="fieldset-label">Password</label>
                                <input type="password" 
                                name='password'
                                className="input" placeholder="Password" 
                                required/>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Register</button>
                                <p>Already have an account? Please <Link className="text-bold text-primary text-base" to='/login'>Login</Link></p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;