import React from "react";

const Link: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & React.PropsWithChildren & {gradient?: boolean; underline?: boolean}
> = ({ children, className, gradient, underline = true, ...props }) => {
  const gradientClassname = gradient ? 'animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500' : ""
  const hoverClassname = "font-semibold animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500".split(" ").map((c) => `hover:${c}`).join(" ")
  return (
    <a
      className={`inline-block text-inherit py-2 cursor-pointer ${hoverClassname} ${gradientClassname} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {underline && <div className="block bg-gradient-to-r from-purple-400 to-blue-500 h-[2px] w-full" />}
    </a>
  );
};

export default Link;
