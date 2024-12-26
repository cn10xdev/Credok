import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

export default function AuthContainer({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  return <AuthStyle>{children}</AuthStyle>;
}

const AuthStyle = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    border-radius: 10px;
  }
  h1 {
    text-align: center;
  }
  .error {
    text-align: center;
    color: red;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 5px;
  }
`;
