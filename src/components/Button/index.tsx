import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  pathIcon?: string;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ text, pathIcon, ...props }) => {
  return (
    <button {...props}>
      {pathIcon && <img src={pathIcon} alt={`Icon button ${text}`} /> }
      <span>{text}</span>
    </button>
  );
};