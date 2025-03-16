import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Formik } from "formik";
import { signInSchema } from "../helpers/authenticationValidationSchema";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { useDispatch } from "react-redux";
import { handleSignInWithEmailAndPassword } from "../../store/authenticationHelper";

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleLogin = async (values, setSubmitting) => {
    const { email, password } = values;
    dispatch(
      handleSignInWithEmailAndPassword({ email, password, setSubmitting })
    );
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          handleLogin(values, setSubmitting, setErrors);
        }}
        validationSchema={signInSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="email" className="mx-2">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={cn(
                  "border",
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                )}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs">{formik.errors.email}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="email" className="mx-2">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={cn(
                  "border",
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                )}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs">{formik.errors.password}</p>
              )}
              <Link
                to="#"
                className="text-xs text-right text-[var(--primary-color)] hover:text-[var(--primary-color-hover)] hover:underline"
              >
                Forget Password?
              </Link>
            </div>
            <Button className={"cursor-pointer"}>
              {formik.isSubmitting ? "Loading..." : "Sign In"}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
