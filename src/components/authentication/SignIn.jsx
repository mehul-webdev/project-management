import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleSignInWithGoogle } from "../../store/authenticationHelper";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(handleSignInWithGoogle());
  };

  return (
    <>
      <div className="flex flex-col items-center mb-3">
        <h3 className="text-3xl font-bold">Sign In</h3>
        <p>Get access to your account</p>
      </div>

      <div className="w-full flex flex-row justify-center gap-4">
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => handleGoogleLogin()}
        >
          <FaGoogle className="text-[#EA4335]" />
        </Button>
        <Button variant="outline" className="cursor-pointer">
          <FaGithub />
        </Button>
      </div>

      <div className="flex items-center w-full my-5">
        <div className="flex-1 border-t-2 border-gray-300"></div>
        <span className="px-4 text-gray-700  text-muted-foreground">
          or use email
        </span>
        <div className="flex-1 border-t-2 border-gray-300"></div>
      </div>

      <SignInForm />

      <p>
        Don't have an account?&nbsp;
        <Link
          to="/auth/sign-up"
          className="text-[var(--primary-color)] hover:text-[var(--primary-color-hover)] hover:underline"
        >
          Sign up
        </Link>
      </p>
    </>
  );
};

export default SignIn;
