import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/project-management-logo.png";
import { useSelector } from "react-redux";

const AuthenticationLayout = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLogin) {
      navigate("/", { replace: true });
    }
  }, [isLogin, location]);

  return (
    <main>
      <div className="authentication">
        <div className="authentication--image"></div>
        <div className="authentication--container">
          <div className="authentication--form">
            <img src={Logo} alt="project-logo" className="logo" />
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthenticationLayout;
