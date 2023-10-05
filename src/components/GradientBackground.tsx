import { Gradient } from '@/common/gradient';
import React from 'react'
import "./GradientBackground.css"
import { twMerge } from 'tailwind-merge';

const GradientBackground: React.FC<React.HTMLAttributes<HTMLCanvasElement>> = ({
  className
}) => {
  React.useLayoutEffect(() => {
    new Gradient().initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      data-transition-in
      className={twMerge("absolute top-0 left-0 right-0 bottom-0", className)}
    />
  )
}

export default GradientBackground