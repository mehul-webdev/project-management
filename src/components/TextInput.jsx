import { ErrorMessage } from "formik";
import React from "react";

const TextInput = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  handleOnChange,
  handleOnBlur,
  Icon,
  error = { isError: false, errorMessage: "" },
  isRequired = false,
}) => {
  const inputClassName = Icon
    ? `input-with-icon ${error?.isError ? "error" : undefined}`
    : `input-without-icon ${error?.isError ? "error" : undefined}`;

  return (
    <div className="input-group">
      <label htmlFor="email" className="hello">
        {label}{" "}
        {isRequired && <span className="input-group--mandatory">*</span>}
      </label>
      <input
        className={inputClassName}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      {Icon && <Icon className="input-group--start-icon" />}

      {error?.isError && (
        <span className="input-group--error-message">{error.errorMessage}</span>
      )}
    </div>
  );
};

export default TextInput;
