import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  ShoppingCart,
  Cloud,
  ShieldCheck,
  BarChart3,
  Zap,
  Users,
  HeartHandshake,
  Award,
  Target,
  Lightbulb,
  HandHeart,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  ShoppingCart,
  Cloud,
  ShieldCheck,
  BarChart3,
  Zap,
  Users,
  HeartHandshake,
  Award,
  Target,
  Lightbulb,
  HandHeart,
  Rocket,
};

interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className = "w-6 h-6 text-blue-600" }: IconProps) => {
  const LucideIconComponent = iconMap[name] ?? Code2;
  return <LucideIconComponent className={className} />;
};

export default Icon;
