import { createBrowserRouter } from "react-router-dom";

import PageLayout from "./layout/PageLayout";
import Dashboard from "./pages/Dashboard";
import AuthenticationLayout from "./layout/AuthenticationLayout";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import CreateProject from "./pages/CreateProject";
import Projects from "./pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create-project",
        element: <CreateProject />,
      },
      {
        path: "projects",
        element: <Projects />,
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
