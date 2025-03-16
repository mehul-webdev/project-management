import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PageLayout = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLogin) {
      navigate("/auth/sign-in", { replace: true });
    }
  }, [isLogin, location]);

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
