import React, { useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { getUserUsingUid } from "../store/authenticationHelper";
import { authAction } from "../store/authentication";
import MainNavigation from "../components/mainNavigation/MainNavigation";

const PageLayout = () => {
  const { user } = useSelector((state) => state.auth);
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
  }, [user]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
