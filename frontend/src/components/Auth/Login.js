import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../../config";
import Button from "../Button/Button";
import {login as loginIcon} from "../../utils/Icons"
import AuthContainer from "./AuthContainer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoader(true);
    const user = { email, password };
    try {
      const res = await fetch(`${config.apiUrl}/login`, {
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
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <AuthContainer>
      <form onSubmit={(e) => login(e)}>
        <h1>Log in</h1>
        {error && <h5 className="error">*{error}</h5>}
        <div className="input-control">
          <input
            type="email"
            name="email"
            required
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-control">
          <input
            type="password"
            name="password"
            required
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit-btn">
          <Button
            name={loader ? "Logging in..." : "Log in"}
            icon={loginIcon}
            bPad={".8rem 1.6rem"}
            bRad={"30px"}
            bg={"var(--color-accent"}
            color={"#fff"}
          />
        </div>
        <span>
          Does not Have account? <Link to={"/signup"}>Sign Up</Link>
        </span>
      </form>
    </AuthContainer>
  );
}

export default Login;
