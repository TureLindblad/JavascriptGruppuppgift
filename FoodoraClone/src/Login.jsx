import React, { useState } from "react";
import './App.css'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="form-container">
            <h2 className="header">Välkommen!</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id="email" name="email" />

                <label htmlfor="password">Lösenord</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />

                <button type="submit">Logga in</button>
            </form>
            <button className="linkbtn" onClick={() => props.onFormSwitch('register')}>Har du inget konto? Registrera dig här.</button>
        </div>
        
    )
}