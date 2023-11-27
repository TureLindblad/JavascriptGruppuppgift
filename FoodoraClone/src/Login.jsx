import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar.js";

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email : "",
        password : ""
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUsers = JSON.parse(localStorage.getItem("user")) || [];
        const findUser = loggedUsers.find(user => input.email === user.email && input.password === user.password);
        if (findUser){
            localStorage.setItem("loggedInUser", JSON.stringify(findUser));
             navigate("/BrowsingPage");
        }
        else {
            alert("Fel email eller lösenord angett")
        }   
    
    }
    const handleClicked = (e) => {
        e.preventDefault();
        navigate("/")
    }

    return (
        <div>
            <header className="startsida-header">
                <a href="./register" className="header">FEEDMEMORE</a>
            </header>
            <form className="form-container" onSubmit={handleLogin}>
                <div className="input-container">
                <h2>Välkomen!</h2>          
                    <div className="input-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            onChange={(e) => 
                                setInput({...input,
                                [e.target.name]: e.target.value,
                            })
                        } 
                            placeholder="exempel@gmail.com"
                            value={input.email} 
                            className="email-input" />
                    </div>
                    
                    <div className="input-form">
                        <label htmlFor="password">Lösenord</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            onChange={(e) => 
                                setInput({...input,
                                [e.target.name]: e.target.value,
                            })
                        } 
                            placeholder="*********"
                            value={input.password} 
                            className="password-input" />
                    </div>

                    <div className="button">
                        <button type="submit" className="startsida-btn">Logga in</button>
                    </div>

                    <p className="p-text">
                        Har du inget konto?
                        <u className="link-click" onClick={handleClicked}>Registrera dig här</u>   
                    </p>
                </div>
            </form>
        </div>
    )
}
export default Login;