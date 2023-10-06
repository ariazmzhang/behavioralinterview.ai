import React from "react";

const POSITION_STYLE = {
  top: "rounded-t-lg",
  middle: 'rounded-none',
  bottom: 'rounded-br-lg',
}

const ChatMessageActionButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.PropsWithChildren & { position: "top" | "middle" | "bottom" }
> = ({ children, className, position, ...props }) => {
  const positionClassName = POSITION_STYLE[position]
  return (
    <button
      className={`group bg-white/80 w-full text-sm px-4 py-2 cursor-pointer disabled:cursor-not-allowed ${positionClassName} ${
        className || ""
      }`}
      {...props}
    >
      <span className="animate-text group-hover:opacity-[0.7] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
      {children}</span>
    </button>
  );
};

export default ChatMessageActionButton;
