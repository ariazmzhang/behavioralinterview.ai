import React from "react";

const ChatSystemActionButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-gray-900/80 bg-white/80 w-full md:w-fit text-sm px-4 py-2 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-[0.8] shadow-md hover:animate-text hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ChatSystemActionButton;
