import React from "react";

interface ButtonPropTypes {
  children: string;
  color: string;
}

const Button = ({ children, color }: ButtonPropTypes) => {
  return <button style={buttonStyle(color)}>{children}</button>;
};

const buttonStyle = (color: string): React.CSSProperties => {
  return {
    backgroundColor: "transparent",
    border: `1px solid ${color}`,
    borderRadius: `6px`,
    color: color,
    cursor: "pointer",
  };
};

export default Button;
