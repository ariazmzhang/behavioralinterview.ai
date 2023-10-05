import React from "react";
import { twMerge } from 'tailwind-merge'

const Card: React.FC<
  React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren
> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge('rounded-lg bg-white/80 backdrop-blur backdrop-saturate-180 shadow-2xl', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
