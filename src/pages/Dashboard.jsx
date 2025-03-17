import React from "react";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        navigate("/auth/sign-in", { replace: true });
      })
      .catch((error) => {
        console.log("Error while logout");
      });
  };

  return (
    <div className="">
      <h2 className="text-4xl font-bold">Dashboard</h2>
    </div>
  );
};

export default Dashboard;
