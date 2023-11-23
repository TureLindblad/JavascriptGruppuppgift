import React, { useState } from "react"
import './App.css'

export const Register = (props) => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div className="form-container">
            <h2 className="header">Hungrig? registrera dig här</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Hela namnet</label>
                <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full name" />

                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id="email" name="email" />

                <label htmlfor="password">Lösenord</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />

                <button type="submit">Logga in</button>
                <button type="submit">Fortsätt utan att logga in.</button>
            </form>
            <button className="linkbtn" onClick={() => props.onFormSwitch('login')}>Har du redan ett konto? Logga in här.</button>
        </div>
    )
}