import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import bg from "./images/bg.png";
import MainLayout from "./components/Layout/MainLayout";
import Orb from "./components/Orb/Orb";
import { useGlobalContext } from "./context/globalContext";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import SignUp from "./components/Auth/SignUp";
import Budget from "./components/Budget/Budget";
import Goals from "./components/Goals/Goals";
import Investment from "./components/Investment/Investment";
import Retirement from "./components/Retirement/Retirement";
import Login from "./components/Auth/Login";

function App() {
  const global = useGlobalContext();
  console.log(global);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/transactions" element={<Dashboard />} />
          <Route path="incomes" element={<Income />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="budgets" element={<Budget />} />
          <Route path="goals" element={<Goals />} />
          <Route path="investments" element={<Investment />} />
          <Route path="retirement" element={<Retirement />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 10px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
`;

export default App;
