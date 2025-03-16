import { Formik } from "formik";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import CheckboxInput from "./CheckboxInput";

import { useDispatch } from "react-redux";
import { handleSingUpWithEmailAndPassword } from "../store/authenticationHelper";
import { signUpFormValidationSchema } from "./helpers/authenticationValidationSchema";

const SignUp = () => {
  const dispatch = useDispatch();

  async function handleLogin(values, setSubmitting) {
    const { email, password, name } = values;
    console.log("here working inside component");

    dispatch(
      handleSingUpWithEmailAndPassword({ email, password, setSubmitting, name })
    );
  }

  return (
    <>
      <div className="authentication--form__title">
        <h3>Sign Up</h3>
        <p>Create your account today</p>
      </div>
      <button className="btn white-btn authentication--form__btn">
        <FaFacebook className="facebook-icon" />{" "}
        <span>Sign in with facebook</span>
      </button>
      <button className="btn white-btn authentication--form__btn">
        <FaGoogle className="gooogle-icon" /> <span>Sign in with google</span>
      </button>
      <div className="divider-with-text">
        <hr />
        <span>or use email</span>
        <hr />
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          confirmPassword: "",
          terms: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values, setSubmitting);
        }}
        validationSchema={signUpFormValidationSchema}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="authentication--form__inputs"
          >
            <TextInput
              label="NAME"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formik.values.name}
              handleOnChange={formik.handleChange}
              handleOnBlur={formik.handleBlur}
              error={
                formik.touched.name && formik.errors.name
                  ? { isError: true, errorMessage: formik.errors.name }
                  : { isError: false, errorMessage: "" }
              }
              isRequired={true}
            />

            <TextInput
              label="EMAIL ADDRESS"
              type="text"
              name="email"
              id="email"
              placeholder="name@example.com"
              value={formik.values.email}
              handleOnChange={formik.handleChange}
              handleOnBlur={formik.handleBlur}
              error={
                formik.touched.email && formik.errors.email
                  ? { isError: true, errorMessage: formik.errors.email }
                  : { isError: false, errorMessage: "" }
              }
              isRequired={true}
            />

            <div className="authentication--form__confirm-password">
              <PasswordInput
                label="Password"
                name="password"
                id="password"
                placeholder="Password"
                value={formik.values.password}
                handleOnChange={formik.handleChange}
                handleOnBlur={formik.handleBlur}
                error={
                  formik.touched.password && formik.errors.password
                    ? { isError: true, errorMessage: formik.errors.password }
                    : { isError: false, errorMessage: "" }
                }
                isRequired={true}
              />

              <PasswordInput
                label="CONFIRM PASSWORD"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                handleOnChange={formik.handleChange}
                handleOnBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? {
                        isError: true,
                        errorMessage: formik.errors.confirmPassword,
                      }
                    : { isError: false, errorMessage: "" }
                }
                isRequired={true}
              />
            </div>
            <CheckboxInput
              name="terms"
              id="terms"
              handleOnChange={formik.handleChange}
              error={
                formik.touched.terms && formik.errors.terms
                  ? {
                      isError: true,
                      errorMessage: formik.errors.terms,
                    }
                  : { isError: false, errorMessage: "" }
              }
            >
              I accept the <a href="#">terms</a> and{" "}
              <a href="#">privacy policy</a>
            </CheckboxInput>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Sign Up
            </button>

            <Link
              to="/auth/sign-in"
              className="authentication--form__create-link link"
            >
              Sign in to an existing account
            </Link>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
