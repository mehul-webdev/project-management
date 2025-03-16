import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Formik } from "formik";
import { signUpFormValidationSchema } from "../helpers/authenticationValidationSchema";
import { cn } from "../../lib/utils";
import { Checkbox } from "../ui/checkbox";
import { handleSingUpWithEmailAndPassword } from "../../store/authenticationHelper";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const dispatch = useDispatch();

  function handleLogin(values, setSubmitting) {
    const { email, password, name } = values;

    dispatch(
      handleSingUpWithEmailAndPassword({ email, password, setSubmitting, name })
    );
  }

  return (
    <div className="w-full flex flex-col gap-5">
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
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            {console.log("here working", formik)}
            <div className="w-full flex flex-col gap-2">
              <Label htmlFor="name" className="mx-2">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={cn(
                  "border",
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                )}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs">{formik.errors.name}</p>
              )}
            </div>
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

            <div className="flex gap-4">
              <div className="w-full flex flex-col gap-2">
                <Label htmlFor="password" className="mx-2">
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
                  <p className="text-red-500 text-xs">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-2">
                <Label htmlFor="confirmPassword" className="mx-2">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={cn(
                    "border",
                    formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  )}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formik.values.agree}
                onCheckedChange={(checked) =>
                  formik.setFieldValue("terms", checked)
                }
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              {formik.touched.terms && formik.errors.terms && (
                <p className="text-red-500 text-xs">{formik.errors.terms}</p>
              )}
            </div>

            <Button className={"cursor-pointer"} type="submit">
              {formik.isSubmitting ? "Loading..." : " Sign Up"}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
