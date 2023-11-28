import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    // använder mig av useNavigate för att navigera mellan de olika sidorna login och register
    const navigate = useNavigate();
    
    // har state för att hålla användarinput
    const [input, setInput] = useState({
        name : "",
        email : "",
        password : ""
    })
    //funktion som ska hantera när du registrerar dig
    const handleSubmit = (e) => {
        e.preventDefault();

        // här hämtar jag sparade användare för localstorage och om det inte finns några skapas en tom array      
        let otherUsers = localStorage.getItem("user");
        otherUsers = otherUsers ? JSON.parse(otherUsers) : [];

        //lägger till den nya användaren som man registrerat i listan
        otherUsers.push(input);

        //sparar sen min lista i localstorage och navigeras sedan till login sidan efter man tryckt på knappen
        localStorage.setItem("user", JSON.stringify(otherUsers));
        navigate("/login");
    }
    // en funktion som hjälper oss att navigera till browsingpage genom att klicka
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/BrowsingPage");
    }
    // den här funktionen hjälper oss att navigera till loggain sidan
    const handleClickes = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    return (
        <div>
            <header className="startsida-header">
                <a href="./" className="header">FEEDMEMORE</a>
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
                        <button type="submit" className="startsida-btn">Registrera dig här</button>
                        <button className="startsida-btn"onClick={handleClick}>Fortsätt utan att logga in</button>
                    </div>

                    <p className="p-text">
                         Har du redan ett konto?
                            <u className="link-click" onClick={handleClickes}> Logga in här</u>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default Register;