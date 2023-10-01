import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [showpass, setShowPass] = useState(false);
    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password);
        //  reset 
        setErrorMessage('');
        setSuccess('');
        //  validation 
        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorMessage("You shuold have atleast one uppercase")
            return
        }
        else if(!accepted){
            setErrorMessage("Please Accept Our Terms and Conditions.")
            return;
        }

        // Create new user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess("User Created successfully.")
            })
            .catch(error => {
                console.error(error)
                setErrorMessage(error.message)
            })
    }
    return (
        <div className="mt-20">
            <div className="mx-auto  text-center " >
                <h2 className="text-3xl font-bold text-blue-500">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="border-blue-400 border px-3 py-2 rounded-md solid w-1/3 mb-3 mt-5" type="email" name="email" id="" placeholder="Your Email" required />
                    <br />
                    <input
                        className="border-blue-400 border px-3 py-2 rounded-md solid w-1/3 mb-3"
                        type={showpass ? "text" : "password"}
                        name="password"
                        id=""
                        placeholder="Your Password"
                        required />
                    <span className="absolute -ml-10 mt-3" onClick={() => setShowPass(!showpass)}>
                        {
                            showpass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>

                    <br />
                    <div className="  mr-44">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Condition</a></label>
                    </div>
                    <br></br>
                    <input className="btn btn-primary w-1/3" type="submit" value="submit" />
                </form>
                {
                    errorMessage && <p className="text-sm font-bold text-red-700">{errorMessage}</p>
                }
                {
                    success && <p className="text-sm font-bold text-green-600">{success}</p>
                }
                 <p className="mt-3 text-blue-600">Already have an Account? Please <Link className="font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;