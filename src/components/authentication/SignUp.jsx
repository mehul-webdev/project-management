import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  handleSignUpWithGithub,
  handleSignUpWithGoogle,
} from "../../store/authenticationHelper";
import SignUpForm from "./SignUpForm";
import { Button } from "../ui/button";

const SignUp = () => {
  const dispatch = useDispatch();

  function handleGoogleLogin() {
    dispatch(handleSignUpWithGoogle());
  }

  function handleGithubLogin() {
    dispatch(handleSignUpWithGithub());
  }

  return (
    <>
      <div className="flex flex-col items-center mb-3">
        <h3 className="text-3xl font-bold">Sign Up</h3>
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
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => handleGithubLogin()}
        >
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

      <SignUpForm />

      <p>
        Account Exist?&nbsp;
        <Link
          to="/auth/sign-in"
          className="text-[var(--primary-color)] hover:text-[var(--primary-color-hover)] hover:underline"
        >
          Sign in to an existing account
        </Link>
      </p>
    </>
  );
};

export default SignUp;
