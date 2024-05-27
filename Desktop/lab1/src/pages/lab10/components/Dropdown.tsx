import React from "react";
import "./Dropdown.css";

interface DropdownProps {
  inputStyle: string;
  labelStyle: string;
  startIcon?: string;
  endIcon?: string;
  label?: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  inputStyle,
  labelStyle,
  startIcon,
  endIcon,
  label,
  children,
}) => {
  return (
    <div className={`dropdown-container ${inputStyle} ${labelStyle}`}>
      {label && <label className="dropdown-label">{label}</label>}
      <div className="dropdown-wrapper">
        {startIcon && <i className={`icon ${startIcon}`}></i>}
        <select aria-label={label}>{children}</select>
        {endIcon && <i className={`icon ${endIcon}`}></i>}
      </div>
    </div>
  );
};

export default Dropdown;
