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
}) => {
  return (
    <div className="input-group">
      <label htmlFor="email">{label}</label>
      <input
        className={Icon ? "input-with-icon" : "input-without-icon"}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      {Icon && <Icon className="input-group--start-icon" />}
    </div>
  );
};

export default TextInput;
