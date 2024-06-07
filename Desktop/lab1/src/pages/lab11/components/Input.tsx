import React from "react";
import "./Input.css";

interface InputProps {
  inputStyle: string;
  labelStyle: string;
  startIcon?: string;
  endIcon?: string;
  placeholder: string;
  label?: string;
  type?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  inputStyle,
  labelStyle,
  startIcon,
  endIcon,
  placeholder,
  label,
  type = "text",
  error = false,
}) => {
  return (
    <div
      className={`input-container ${inputStyle} ${labelStyle} ${
        error ? "error" : ""
      }`}
    >
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {startIcon && <i className={`icon ${startIcon}`}></i>}
        <input type={type} placeholder={placeholder} />
        {endIcon && <i className={`icon ${endIcon}`}></i>}
      </div>
    </div>
  );
};

export default Input;
