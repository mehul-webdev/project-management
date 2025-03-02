import React from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

const PasswordInput = ({
  label,
  name,
  id,
  placeholder,
  value,
  handleOnChange,
  handleOnBlur,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = showPassword ? "text" : "password";

  return (
    <div className="input-group">
      <label htmlFor="password">{label}</label>
      <input
        type={inputType}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      <IoKeyOutline className="input-group--start-icon" />
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
    </div>
  );
};

export default PasswordInput;
