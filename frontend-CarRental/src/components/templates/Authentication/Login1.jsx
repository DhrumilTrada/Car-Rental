import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { login, reset, getUserInfo, register, logout } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

function LoginPage() {

    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    });
    const { email, password } = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        dispatch(login(userData));
    };

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        
        if (isSuccess || user) {
            navigate("/");
        }

        dispatch(reset());
        dispatch(getUserInfo());

    }, [isError, isSuccess, user, navigate, dispatch]);

    const [registerData, setRegisterData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": "",
    });

    const { first_name, last_name, re_password } = formData;

    const handleRegister = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const registerSubmit = (e) => {
        e.preventDefault();
        if (password !== re_password) {
            toast.error("Passwords do not match");
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password
            };
            console.log(userData);
            dispatch(register(userData));
        }
    };

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess && user) {
            navigate("/login");
            toast.success("An activation email has been sent to your email. Please check your email");
        }

        dispatch(reset());

    }, [isError, isSuccess, user, dispatch]);

    return (
        <>
        <div className="custom-container" style={{fontFamily:"Roboto"}}>
        <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
            <div className="front">
                <img src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/07/2024-ford-mustang-line-up-front-profile-driving.jpg" alt="" />
                <div className="text">
                    <span className="text-1">Every new friend is a <br /> new adventure</span>
                    <span className="text-2">Let's get connected</span>
                </div>
            </div>
            <div className="back">
                <img className="backImg" src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg" alt=""/>
                <div className="text">
                    <span className="text-1">Complete miles of journey <br /> with one step</span>
                    <span className="text-2">Let's get started</span>
                </div>
            </div>
        </div>
        <div className="forms">
            <div className="form-content">
                <div className="login-form">
                    <div className="title">Login</div>
                    <form>
                        <div className="input-boxes">
                            <div className="input-box">
                                <i className="fa fa-user" />
                                <input 
                                    type="text" 
                                    placeholder="Enter your email"
                                    name="email"
                                    onChange={handleChange}
                                    value={email}
                                    required 
                                />
                            </div>
                            <div className="input-box">
                                <i className="fa fa-key" />
                                <input 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="text"><Link to="/reset-password">Forgot Password ?</Link></div>
                            <div className="button input-box">
                                <input onClick={handleSubmit} type="submit" defaultValue="Submit" />
                            </div>
                            <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Signup now</label></div>
                        </div>
                    </form>
                </div>
                <div className="signup-form">
                    <div className="title">Signup</div>
                    <form>
                        <div className="input-boxes">
                            <div className="input-box">
                                <i className="fa fa-user" />
                                <input 
                                    type="text" 
                                    name="first_name"
                                    placeholder="Enter First name."
                                    onChange={handleRegister}
                                    value={first_name}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className="fa fa-user" />
                                <input 
                                    type="text"
                                    placeholder="Enter Last name."
                                    name="last_name"
                                    onChange={handleRegister}
                                    value={last_name}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className="fa fa-envelope" />
                                <input 
                                    type="text" 
                                    placeholder="Enter your email" 
                                    name="email"
                                    onChange={handleRegister}
                                    value={email}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className="fa fa-key" />
                                <input 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    name="password"
                                    onChange={handleRegister}
                                    value={password}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className="fa fa-lock" />
                                <input 
                                    type="password" 
                                    placeholder="Re-enter your password" 
                                    name="re_password"
                                    onChange={handleRegister}
                                    value={re_password}
                                    required
                                />
                            </div>
                            <div className="button input-box">
                                <input type="submit" onClick={registerSubmit} defaultValue="Submit" />
                            </div>
                            <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
      </div>
    </>
    );
}

export default LoginPage;
