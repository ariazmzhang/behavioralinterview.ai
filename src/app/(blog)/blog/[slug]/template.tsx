"use client"
import GradientBackground from "@/components/GradientBackground";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GradientBackground className="fixed" />
      {children}
    </>
  );
}
