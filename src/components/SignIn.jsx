import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

const SignIn = () => {
  const handleLogin = (values, setSubmitting) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2)); // Replace this with actual API call
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
      <div class="divider-with-text">
        <hr />
        <span>or use email</span>
        <hr />
      </div>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) =>
          handleLogin(values, setSubmitting)
        }
        validate={(values) => handleValidation(values)}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="authentication--form__inputs"
          >
            <div className="input-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="name@example.com"
              />
              <FaRegUser className="input-group--icon" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <IoKeyOutline className="input-group--icon" />
            </div>
            <div className="authentication--form__actions">
              <div className="input-inline">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="authentication--form__link link">
                Forget Password
              </a>
            </div>
            <button className="btn btn-primary margin-4">Sign In</button>
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
