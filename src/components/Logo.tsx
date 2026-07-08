import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface LogoProps {
  isLight?: boolean;
  className?: string;
}

const Logo = ({ isLight = false, className = "" }: LogoProps) => {
  const textClass = isLight ? "text-gray-900" : "text-white";

  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20 transition-transform duration-300 group-hover:rotate-6">
        <Sparkles className="h-5 w-5" />
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${textClass}`}>
        NexaCMS
      </span>
    </Link>
  );
};

export default Logo;
