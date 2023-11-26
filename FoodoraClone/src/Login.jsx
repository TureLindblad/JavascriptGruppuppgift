import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
             navigate("/home");
        }
        else {
            alert("Fel email eller lösenord angett")
        }   
    }

    return (
        <div>
            <header>
                <a href="./" className="header">FEEDMEMORE</a>
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
                        <button type="submit" className="login-button">Logga in</button>
                    </div>

                    <p className="p-text">
                        Har du inget konto?
                        <a href="./" className="login-push">
                            <u> Registrera dig här</u>
                        </a>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default Login;