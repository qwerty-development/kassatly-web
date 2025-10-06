import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'terracotta' | 'burgundy';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  size = 'md', 
  children, 
  className = '',
  href,
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    default: 'bg-grey-200 hover:bg-grey-300 text-grey-800 focus:ring-grey-400',
    primary: 'bg-navy-600 hover:bg-navy-700 text-white focus:ring-navy-400',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-400',
    accent: 'bg-primary-500 hover:bg-primary-400 text-white focus:ring-primary-300',
    terracotta: 'bg-terracotta-500 hover:bg-terracotta-400 text-white focus:ring-terracotta-300',
    burgundy: 'bg-burgundy-500 hover:bg-burgundy-400 text-white focus:ring-burgundy-300'
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
