import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { config } from "../../config";
import Button from "../Button/Button";
import { login as loginIcon } from "../../utils/Icons";
import AuthContainer from "./AuthContainer";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    setLoader(true);
    const user = { email, username, password };
    try {
      const res = await fetch(`${config.apiUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!res.ok) {
        throw new Error("Something Went wrong");
      }
      const data = await res.json();
      console.log(data);
      if (data.error) {
        console.log(data);

        throw new Error(data.error);
      }
      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <AuthContainer>
      <form onSubmit={(e) => signUp(e)}>
        <h1>Sign Up</h1>
        {error && <h5 className="error">*{error}</h5>}
        <div>
          <label htmlFor={"username"}>Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={email}>Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={password}>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div className="submit-btn">
            <Button
              name={loader ? "Signing Up..." : "Sign Up"}
              icon={loginIcon}
              bPad={".5rem 1.6rem"}
              bRad={"30px"}
              bg={"var(--color-accent"}
              color={"#fff"}
            />
          </div>
        </div>
        <span>
          Already Have account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </AuthContainer>
  );
}

/**
 * {email: 'user2@example.com', username: 'User2', password: 'user2password'}
 */

export default SignUp;
