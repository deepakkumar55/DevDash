"use client";

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function PremiumButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon,
  disabled = false,
  fullWidth = false,
}: PremiumButtonProps) {
  const [hovered, setHovered] = useState(false);
  
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg active:shadow-md active:bg-indigo-800",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg active:shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800 dark:text-white dark:hover:bg-gray-800",
    gradient: "text-white shadow-lg hover:shadow-xl active:shadow-md gradient-animation-bg"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-2",
    xl: "text-lg px-10 py-5 gap-3"
  };
  
  const baseStyles = "relative overflow-hidden rounded-xl font-medium transition-all group flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 dark:focus:ring-indigo-400/50 dark:focus:ring-offset-gray-900";
  const widthStyles = fullWidth ? "w-full" : "";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "transform hover:-translate-y-1 active:translate-y-0";
  
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`;
  
  // Special gradient animation background for gradient variant
  const gradientStyles = variant === 'gradient' ? {
    background: "linear-gradient(-45deg, #4f46e5, #8b5cf6, #d946ef, #ec4899)",
    backgroundSize: "400% 400%",
    animation: "gradient-animation 8s ease infinite",
  } : {};
  
  const buttonContent = (
    <>
      {/* Shine effect on hover */}
      {!disabled && variant !== 'ghost' && (
        <motion.span
          className="absolute inset-0 overflow-hidden rounded-xl"
          initial={false}
          animate={hovered ? { opacity: 1, left: '100%' } : { opacity: 0, left: '-100%' }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform rotate-12 skew-x-12"
            style={{ width: '50%', left: '-100%' }}
          />
        </motion.span>
      )}
      
      {/* Subtle animated background */}
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-xl -z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Subtle glow effect on hover */}
      {variant !== 'ghost' && !disabled && (
        <motion.span
          className="absolute inset-0 -z-10 rounded-xl"
          initial={{ boxShadow: "0 0 0 rgba(79, 70, 229, 0)" }}
          animate={{ boxShadow: hovered ? "0 0 20px rgba(79, 70, 229, 0.5)" : "0 0 0 rgba(79, 70, 229, 0)" }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Icon and text */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </span>
    </>
  );
  
  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={allStyles}
        style={gradientStyles}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <motion.button
      className={allStyles}
      style={gradientStyles}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileTap={disabled ? {} : { scale: 0.98 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {buttonContent}
    </motion.button>
  );
}
