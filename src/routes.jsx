import { createBrowserRouter } from "react-router-dom";

import PageLayout from "./layout/PageLayout";
import Dashboard from "./pages/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthenticationLayout from "./layout/AuthenticationLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
