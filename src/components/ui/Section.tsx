import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'light' | 'dark' | 'gradient' | 'primary' | 'transparent';
  id?: string;
  withContainer?: boolean;
  paddingY?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

export default function Section({ 
  children, 
  className = '', 
  bgColor = 'light',
  id,
  withContainer = true,
  paddingY = 'lg'
}: SectionProps) {
  const bgStyles = {
    light: 'bg-white dark:bg-gray-900',
    dark: 'bg-gray-50 dark:bg-gray-800',
    gradient: 'bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800',
    primary: 'bg-indigo-600 dark:bg-indigo-700',
    transparent: ''
  };
  
  const paddingStyles = {
    none: '',
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  };
  
  return (
    <section 
      className={`${bgStyles[bgColor]} ${paddingStyles[paddingY]} ${className}`} 
      id={id}
    >
      {withContainer ? (
        <div className="container mx-auto px-6">
          {children}
        </div>
      ) : children}
    </section>
  );
}
