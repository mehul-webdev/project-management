import { Formik } from "formik";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";

const SignUp = () => {
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
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values, setSubmitting);
        }}
        validate={(values) => handleValidation(values)}
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
              />

              <PasswordInput
                label="CONFIRM PASSWORD"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.password}
                handleOnChange={formik.handleChange}
                handleOnBlur={formik.handleBlur}
              />
            </div>
            <div className="input-inline">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">
                I accept the <a href="#">terms</a> and{" "}
                <a href="#">privacy policy</a>
              </label>
            </div>
            <button
              className="btn btn-primary margin-4"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Sign Up
            </button>
            <a href="#" className="authentication--form__create-link link">
              Sign in to an existing account
            </a>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
