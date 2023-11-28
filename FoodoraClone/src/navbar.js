import React from "react";
import { useNavigate } from "react-router-dom";
import Iconcart from "./icon-cart";

const Navbar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  const handleClicked = (e) => {
    e.preventDefault();
    navigate("/BrowsingPage");
  };

  return (
    <header className="navbar-header">
      <Iconcart />
      <nav className="navbar">
        <div className="navbar-display">
          {loggedInUser ? (
            <>
            <p>Välkommen {loggedInUser.name}</p>
              <button onClick={handleLogOut} type="submit" className="logout-btn">
              Logga ut
              </button>
            </>
          ) : (
            <>
              <p>Ingen användare inloggad.</p>
              <button onClick={handleLogOut} type="submit" className="logout-btn">
                Registrera dig
              </button>
            </>
          )}
          <p className="navbar-logname" onClick={handleClicked}>
            FEEDMEMORE
          </p>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


