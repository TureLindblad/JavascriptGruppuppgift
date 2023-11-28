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

  return (
    <header>
      <Iconcart />
      <nav className="navbar">
        <div>
          {loggedInUser ? (
            <p>Välkommen {loggedInUser.name}</p>
          ) : (
            <p>Ingen användare inloggad.</p>
          )}
          <button onClick={handleLogOut} type="submit" className="logout-btn">
            Logga ut
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
