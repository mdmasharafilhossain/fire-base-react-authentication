import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [error ,setError]= useState('');
    const [success ,setSuccess] = useState('');
    const handleLogIn = e =>{
       
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        setError("");
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result)
            setSuccess("Login Successfully")
            
        })
        .catch(error =>{
            console.error(error)
            setError("Invalid Email or Password")
        })
    }

    const handleForgetPassword = e =>{
        console.log("fuck off")
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </form>
                        {
                            error && <p className="text-sm font-bold text-center mt-3 text-red-700">{error}</p>
                        }
                        {
                            success && <p className="text-sm font-bold text-green-600 text-center mt-3">{success}</p>
                        }

                    </div>
                   
                </div>
                <p className="mt-3 text-blue-600">New to Our Website? Please <Link className="font-bold" to="/register">Register</Link></p>
            </div>
            
        </div>
    );
};

export default Login;