import React from "react";
import ProjectManagement from "../assets/project-management.png";
import Logo from "../assets/project-management-logo.png";
import SignIn from "../components/SignIn";

const Authentication = () => {
  return (
    <div className="authentication">
      <div className="authentication--image"></div>
      <div className="authentication--container">
        <div className="authentication--form">
          <img src={Logo} alt="project-logo" className="logo" />
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
