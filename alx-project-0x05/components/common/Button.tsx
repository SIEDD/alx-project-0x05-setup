import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "gray",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: buttonBackgroundColor }}
      className="py-2 px-4 rounded text-white font-semibold shadow-md"
    >
      {buttonLabel}
    </button>
  );
};

export default Button;

