import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MainStyleLayout } from "../../styles/Layouts";
import Navigation from "../Navigation/Navigation";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, []);

  return (
    <MainStyleLayout>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </MainStyleLayout>
  );
}
