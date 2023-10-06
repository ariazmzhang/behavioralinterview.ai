import React from "react";
import { twMerge } from "tailwind-merge";

const ActionChip: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "rounded-full bg-white/80 px-4 py-2 text-xs text-white cursor-pointer bg-gradient-to-r from-purple-400 to-blue-500 hover:backdrop-blur hover:backdrop-saturate-180 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionChip;
