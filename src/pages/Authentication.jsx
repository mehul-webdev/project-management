import React from "react";
import Logo from "../assets/project-management-logo.png";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Authentication = () => {
  return (
    <div className="authentication">
      <div className="authentication--image"></div>
      <div className="authentication--container">
        <div className="authentication--form">
          <img src={Logo} alt="project-logo" className="logo" />
          {/* <SignIn /> */}
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
