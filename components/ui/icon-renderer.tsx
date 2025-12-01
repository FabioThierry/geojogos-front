import {
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  Gamepad2,
  Globe,
  Cpu,
  Box,
  Brain,
  Lightbulb,
  Building2,
  MapPin,
  GraduationCap,
  MessageSquare,
  Monitor,
  Puzzle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface IconRendererProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // About page icons
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  Gamepad2,
  Globe,
  // Home page icons
  Cpu,
  Box,
  Brain,
  Lightbulb,
  Building2,
  // Contact page icons
  MapPin,
  GraduationCap,
  MessageSquare,
  // Custom projects page icons
  Monitor,
  Puzzle,
  CheckCircle,
  ArrowRight,
};

export function IconRenderer({
  name,
  className = "h-6 w-6",
}: IconRendererProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
