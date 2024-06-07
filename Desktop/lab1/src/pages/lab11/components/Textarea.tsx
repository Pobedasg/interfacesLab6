import React from "react";
import "./Textarea.css";

interface TextareaProps {
  inputStyle: string;
  labelStyle: string;
  startIcon?: string;
  placeholder: string;
  label?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  inputStyle,
  labelStyle,
  startIcon,
  placeholder,
  label,
}) => {
  return (
    <div className={`textarea-container ${inputStyle} ${labelStyle}`}>
      {label && <label>{label}</label>}
      <div className="textarea-wrapper">
        {startIcon && <i className={`icon ${startIcon}`}></i>}
        <textarea placeholder={placeholder}></textarea>
      </div>
    </div>
  );
};

export default Textarea;
