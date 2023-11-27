import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    }
    
    return (
        <div>
            {loggedInUser ? (<p>Välkommen {loggedInUser.name}</p>) : (<p>Ingen användare inloggad.</p>)}
            <button onClick={handleLogOut} type="submit" className="logout-btn">Logga ut</button>
        </div>
        
        
        );

}

export default Home;
