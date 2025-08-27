import React from 'react';
import { Button } from './button';
import { cn } from '../../utils';
import { LINKS } from '../../constants/links';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export function CTAButton({ 
  children, 
  variant = 'primary',
  size = 'lg',
  className,
  onClick,
  href,
  fullWidth = false,
  icon
}: CTAButtonProps) {
  const baseClasses = 'transition-all duration-300 transform hover:-translate-y-1';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    white: 'bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-6 text-xl'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, '_blank');
    } else {
      // Default: abrir WhatsApp
      window.open(LINKS.whatsapp, '_blank');
    }
  };

  return (
    <Button
      size={size}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      onClick={handleClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
}
