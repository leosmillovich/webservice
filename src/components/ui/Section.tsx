import React from 'react';
import { cn } from '../../utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'blue' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export function Section({ 
  children, 
  className, 
  containerClassName,
  background = 'white',
  padding = 'lg',
  id 
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
  };

  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16', 
    lg: 'py-20',
    xl: 'py-24'
  };

  return (
    <section 
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
}

// Componente SectionHeader en el mismo archivo
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
  maxWidth = '3xl'
}: SectionHeaderProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl'
  };

  return (
    <div className={cn(
      'mb-16',
      centered && 'text-center',
      className
    )}>
      <h2 className={cn(
        'text-3xl sm:text-4xl text-gray-900 mb-4',
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-xl text-gray-600',
          centered && 'mx-auto',
          maxWidthClasses[maxWidth],
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
