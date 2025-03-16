import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ProjectManagement from "../assets/project-management.avif";
import Logo from "../assets/project-management-logo.png";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { getUserUsingUid } from "../store/authenticationHelper";
import { authAction } from "../store/authentication";

const Authentication = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const userData = await getUserUsingUid(uid);
        if (JSON.stringify(user) !== JSON.stringify(userData)) {
          dispatch(authAction.handleUpdateUser(userData));
        }
      } else {
        dispatch(authAction.clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      navigate("/", { replace: true });
    }
  }, [user, location]);

  return (
    <main>
      <div className="w-full min-h-screen flex">
        <div
          className="bg-cover bg-center bg-no-repeat md:w-2/5 lg:w-5/6 :hidden md:block"
          style={{ backgroundImage: `url(${ProjectManagement})` }}
        ></div>
        <div className="w-full md:w-3/5 lg:W-1/6 px-6 py-2 md:px-16 md:py-3 lg:px-24 lg:py-5 flex items-center justify-start md:justify-center gap-2 flex-col">
          <img src={Logo} alt="logo" className="w-[60px] h-[60px]" />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Authentication;
