"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden";
  
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 active:shadow-md",
    secondary: "bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
    outline: "bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/30",
    gradient: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 active:shadow-md"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-2.5"
  };
  
  const disabledStyles = disabled ? "opacity-60 cursor-not-allowed" : "transform hover:-translate-y-0.5 active:translate-y-0";
  const widthStyle = fullWidth ? "w-full" : "";
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyle} ${className}`;
  
  const content = (
    <>
      {icon && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
      {variant === 'gradient' && (
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-white/20 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
        </span>
      )}
    </>
  );
  
  if (href && !disabled) {
    return (
      <Link href={href} className={`group ${styles}`}>
        {content}
      </Link>
    );
  }
  
  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={styles}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
