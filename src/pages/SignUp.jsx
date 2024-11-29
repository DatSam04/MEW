import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/LogIn.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SignUp(){
    const navigate = useNavigate();

    const [info, setInfo] = useState({
        username: "",
        password: "",
        email: ""
    });

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function handleChange(e){
        const {name, value} = e.target;
        setInfo(prevValue => {
            if(name === "username"){
                return{
                    ...prevValue,
                    [name]: value
                }
            }else if(name === "password"){
                return{
                    ...prevValue,
                    [name]: value
                }
            }else if(name === "email"){
                return{
                    ...prevValue,
                    [name]: value
                }
            }
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        if(info.username && info.password && info.email){
            navigate('/')
        }else{
            alert("Please input all")
        }
    }

    return(
        <div className="LogInPage">
            <form className="LogInForm" onSubmit={handleSubmit}>
                <h1 className="SignUpTitle">Sign Up</h1>
                <div className="backArrowBtn" onClick={() => navigate("/")}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <span className="InputTitle">Username</span>
                <input name="username" className="SignUpText" onChange={handleChange} type="text" placeholder="Username" value={info.username} />
                <span className="InputTitle">Password</span>
                <input name="password" className="SignUpText" onChange={handleChange} type="text" placeholder="Password" value={info.password} />
                <span className="InputTitle">Email</span>
                <input name="email" className="SignUpText" onChange={handleChange} type="text" placeholder="Email" value={info.email} />
                <div className="BtnSection">
                    <button type="submit" className="LogInBtn">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;