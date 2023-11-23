import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <>
      <h1>Hej - {userName.name}</h1>;
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </>
  );
};

export default Home;
