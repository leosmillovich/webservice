import {
  TrendingUp,
  Search,
  MessageCircle,
  BarChart3,
  Zap,
  Globe,
  Check,
  Star,
  Plus,
  FileText,
  Palette,
  Rocket,
  Clock,
  Shield,
  CheckCircle,
  Mail,
  MapPin,
  ExternalLink,
  type LucideIcon
} from 'lucide-react';

// Re-exportar todos los iconos para uso directo
export {
  TrendingUp,
  Search,
  MessageCircle,
  BarChart3,
  Zap,
  Globe,
  Check,
  Star,
  Plus,
  FileText,
  Palette,
  Rocket,
  Clock,
  Shield,
  CheckCircle,
  Mail,
  MapPin,
  ExternalLink,
  type LucideIcon
};

// Iconos específicos del negocio
export const BusinessIcons = {
  web: Globe,
  analytics: BarChart3,
  whatsapp: MessageCircle,
  speed: Zap,
  quality: Shield,
  time: Clock,
  success: CheckCircle,
  design: Palette,
  rocket: Rocket,
  document: FileText,
  trendingUp: TrendingUp,
  search: Search
} as const;
