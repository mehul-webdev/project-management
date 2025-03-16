import React from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const PasswordInput = ({
  label,
  name,
  id,
  placeholder,
  value,
  handleOnChange,
  handleOnBlur,
  Icon,
  error,
  isRequired = false,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = showPassword ? "text" : "password";

  const inputClassName = Icon
    ? `input-with-icon ${error?.isError ? "error" : undefined}`
    : `input-without-icon ${error?.isError ? "error" : undefined}`;

  return (
    <div className="input-group">
      <label htmlFor="password">
        {label}{" "}
        {isRequired && <span className="input-group--mandatory">*</span>}
      </label>
      <input
        type={inputType}
        className={inputClassName}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        autoComplete={"true"}
      />
      {Icon && <Icon className="input-group--start-icon" />}

      {showPassword ? (
        <FaEyeSlash
          className="input-group--end-icon"
          onClick={handleShowPassword}
        />
      ) : (
        <FaRegEye
          className="input-group--end-icon"
          onClick={handleShowPassword}
        />
      )}
      {error?.isError && (
        <span className="input-group--error-message">{error.errorMessage}</span>
      )}
    </div>
  );
};

export default PasswordInput;
