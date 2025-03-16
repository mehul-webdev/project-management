import React from "react";

const CheckboxInput = ({ name, id, children, error = {}, handleOnChange }) => {
  return (
    <div className="input-inline-container">
      <div className="input-inline">
        <input
          type="checkbox"
          name={name}
          id={id}
          className="checkbox-input"
          onChange={handleOnChange}
        />
        <label htmlFor={id}>{children}</label>
      </div>

      {error?.isError && (
        <p className="input-group--error-message">{error.errorMessage}</p>
      )}
    </div>
  );
};

export default CheckboxInput;
