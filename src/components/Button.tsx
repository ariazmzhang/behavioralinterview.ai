import React from "react";

const Button: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & React.PropsWithChildren & {active?: boolean}
> = ({ children, className, active, ...props }) => {
  const activeClassname = active ? ' font-semibold animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500' : ""
  return (
    <a
      className={`text-slate-800 text-sm px-4 py-2 rounded-lg cursor-pointer${activeClassname} hover:backdrop-blur hover:backdrop-saturate-180 hover:shadow-lg hover:animate-text hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 ${className || ""}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
