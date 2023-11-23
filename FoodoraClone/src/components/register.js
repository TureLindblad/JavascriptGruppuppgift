import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="text"
            required
          />
          <label>Name</label>
        </div>

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
          <button type="submit">Register</button>
        </div>

        <p>
          Have a account?
          <Link to="/login">
            <u>Login here</u>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
