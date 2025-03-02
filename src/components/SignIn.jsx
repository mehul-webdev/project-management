import React from "react";
import { Formik } from "formik";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";

const SignIn = () => {
  const handleLogin = (values, setSubmitting) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };

  const handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <>
      <div className="authentication--form__title">
        <h3>Sign In</h3>
        <p>Get access to your account</p>
      </div>
      <button className="btn white-btn authentication--form__btn">
        <FaFacebook /> <span>Sign in with facebook</span>
      </button>
      <button className="btn white-btn authentication--form__btn">
        <FaGoogle /> <span>Sign in with google</span>
      </button>
      <div className="divider-with-text">
        <hr />
        <span>or use email</span>
        <hr />
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
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
              label="EMAIL ADDRESS"
              type="text"
              name="email"
              id="email"
              placeholder="name@example.com"
              value={formik.values.email}
              handleOnChange={formik.handleChange}
              handleOnBlur={formik.handleBlur}
              Icon={FaRegUser}
            />

            <PasswordInput
              label="Password"
              name="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              handleOnChange={formik.handleChange}
              handleOnBlur={formik.handleBlur}
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
              Sign In
            </button>
            <a href="#" className="authentication--form__create-link link">
              Create an account
            </a>
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
