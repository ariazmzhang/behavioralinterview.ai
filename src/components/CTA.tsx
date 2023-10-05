import React from "react";

const CTA: React.FC<
  React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren & {active?: boolean}
> = ({ children, className, active, ...props }) => {
  const activeClassname = active ? 'font-semibold animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500' : ""
  const hoverClassname = "animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500".split(" ").map((c) => `hover:${c}`).join(" ")
  return (
    <div
      className={`text-slate-800 text-sm px-4 py-2 rounded-lg cursor-pointer backdrop-blur backdrop-saturate-180 shadow-md inline-block ${hoverClassname} ${activeClassname} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CTA;
