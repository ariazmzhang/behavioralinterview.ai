import { Gradient } from './gradient';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const useIsomorphicLayoutEffect = 
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const GradientBackground: React.FC<React.HTMLAttributes<HTMLCanvasElement>> = ({ className }) => {
  useIsomorphicLayoutEffect(() => {
    new Gradient().initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      data-transition-in
      className={twMerge("absolute top-0 left-0 right-0 bottom-0", className)}
    />
  );
}

export default GradientBackground;
