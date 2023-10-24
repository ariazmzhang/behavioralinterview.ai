
const TextLogo: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  > = ({ className }) => {
  return (
    <h1 className={`font-bold tracking-tight ${className || ""}`}>
    Beh
    <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
      a
    </span>
    vioral Interv
    <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
      i
    </span>
    ew
  </h1>
  );
};

export default TextLogo;