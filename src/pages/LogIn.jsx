import React, { useState } from "react";
import '../assets/styles/LogIn.css';
import { useNavigate } from "react-router-dom";

function LogIn(){
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        username: "",
        password: ""
    });

    const [username, setUserName] = useState("Testing")
    const [password, setPassword] = useState("Test")

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
            }
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        if(info.username === username && info.password === password){
            navigate('/Home')
        }else{
            alert("Incorrect Username or Password")
        }
    }

    return(
        <div className="LogInPage">
            <form className="LogInForm" onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <span className="InputTitle">Username</span>
                <input name="username" className="InputText" onChange={handleChange} type="text" placeholder="Username" value={info.username} />
                <span className="InputTitle">Password</span>
                <input name="password" className="InputText" onChange={handleChange} type="text" placeholder="Password" value={info.password} />
                <div className="BtnSection">
                    <div className="LinkBtn">Forgot Password?</div>
                    <div className="LinkBtn" onClick={() => navigate('/SignUp')}>Sign Up?</div>
                    <button type="submit" className="LogInBtn">Log In</button>
                </div>
            </form>
        </div>
    );
}

export default LogIn;