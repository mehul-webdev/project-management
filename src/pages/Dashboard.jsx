import React from "react";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        console.log("logout");
        navigate("/auth/sign-in", { replace: true });
      })
      .catch((error) => {
        console.log("Error while logout");
      });
  };

  return (
    <div className="bg-foreground h-screen">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
