import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        let otherUsers = localStorage.getItem("user");
        otherUsers = otherUsers ? JSON.parse(otherUsers) : [];

        otherUsers.push(input);

        localStorage.setItem("user", JSON.stringify(otherUsers));
        navigate("/login");
    }

    return (
        <div>
            <header>
                <a href="./register" className="header">FEEDMEMORE</a>
            </header>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="input-container">
                    <h2>Hungrig? registrera dig här.</h2>
                    <div className="input-form">
                        <label htmlFor="name">Hela namnet</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            onChange={(e) => 
                                setInput({...input,
                                [e.target.name]: e.target.value,
                            })
                        } 
                            placeholder="namn..."
                            value={input.name} 
                            className="name-input" />
                    </div>
                    
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
                        <button type="submit" className="register-button">Registrera dig här</button>
                    </div>

                    <p className="p-text">
                        Har du redan ett konto?
                        <a href="./login" className="login-push">
                            <u> Logga in här</u>
                        </a>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default Register;