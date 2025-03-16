import React from "react";
import { Formik } from "formik";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { handleSignInWithEmailAndPassword } from "../store/authenticationHelper";
import { useDispatch } from "react-redux";
import { signInSchema } from "./helpers/authenticationValidationSchema";

const SignIn = () => {
  const dispatch = useDispatch();
  const handleLogin = async (values, setSubmitting) => {
    const { email, password } = values;
    dispatch(
      handleSignInWithEmailAndPassword({ email, password, setSubmitting })
    );
  };

  return (
    <>
      <div className="authentication--form__title">
        <h3>Sign In</h3>
        <p>Get access to your account</p>
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
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          handleLogin(values, setSubmitting, setErrors);
        }}
        validationSchema={signInSchema}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="authentication--form__inputs"
          >
            <TextInput
              label="EMAIL ADDRESS"
              type="text"
              name="email"
              id="email"
              placeholder="name@example.com"
              value={formik.values.email}
              handleOnChange={formik.handleChange}
              handleOnBlur={formik.handleBlur}
              Icon={FaRegUser}
              error={
                formik.touched.email && formik.errors.email
                  ? { isError: true, errorMessage: formik.errors.email }
                  : { isError: false, errorMessage: "" }
              }
              isRequired={true}
            />

            <PasswordInput
              label="Password"
              name="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              handleOnChange={formik.handleChange}
              handleOnBlur={formik.handleBlur}
              Icon={IoKeyOutline}
              error={
                formik.touched.password && formik.errors.password
                  ? { isError: true, errorMessage: formik.errors.password }
                  : { isError: false, errorMessage: "" }
              }
              isRequired={true}
            />

            <div className="authentication--form__actions">
              <div className="input-inline">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="authentication--form__link link">
                Forget Password
              </a>
            </div>
            <button
              className="btn btn-primary margin-4"
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "loading..." : "Sign In"}
            </button>
            <Link
              to="/auth/sign-up"
              className="authentication--form__create-link link"
            >
              Create an account
            </Link>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;

{
  /* <div className="input-group">
<label htmlFor="email">Email address</label>
<input type="text" name="email" id="email" />
</div> */
}

// {({ isSubmitting }) => (
//   <Form className="authentication--form__inputs">

//     <Field type="email" name="email" />
//     <ErrorMessage name="email" component="div" />
//     <Field type="password" name="password" />
//     <ErrorMessage name="password" component="div" />
//     <button type="submit" disabled={isSubmitting}>
//       Submit
//     </button>
//   </Form>
// )}
