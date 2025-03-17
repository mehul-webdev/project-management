import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { getUserUsingUid } from "../store/authenticationHelper";
import { authAction } from "../store/authentication";
import MainNavigation from "../components/mainNavigation/MainNavigation";
import { Button } from "../components/ui/button";

import SideBarNavigation from "../components/sideBarNavigation/SideBarNavigation";

const PageLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const previousUserRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/auth/sign-in", { replace: true });
      } else {
        const uid = user.uid;
        const userData = await getUserUsingUid(uid);
        if (
          JSON.stringify(previousUserRef.current) !== JSON.stringify(userData)
        ) {
          dispatch(authAction.handleUpdateUser(userData));
          previousUserRef.current = userData;
        }
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <MainNavigation />
      <main>
        <div className="flex">
          <SideBarNavigation />
          <div className="flex-1 p-8">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default PageLayout;
