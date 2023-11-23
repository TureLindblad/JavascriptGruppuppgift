import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("Logged in", true);
      navigate("/");
    } else {
      alert("WRONG EMAIL OR PASSWORD");
    }
  };
  return (
    <>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "red",
        }}
      >
        <div>
          <input
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="text"
            required
          />
          <label>Email</label>
        </div>

        <div>
          <input
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="password"
            required
          />
          <label>Password</label>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>

        <p>
          Don't have a account?
          <Link to="/register">
            <u>Register here</u>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
