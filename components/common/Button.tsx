import React from "react";

interface ButtonPropTypes {
  children: string;
  color: string;
  onClick: any;
}

const Button = ({ children, color, onClick }: ButtonPropTypes) => {
  return (
    <button onClick={onClick} style={buttonStyle(color)}>
      {children}
    </button>
  );
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
