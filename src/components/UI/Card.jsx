import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const baseClasses = 'bg-white rounded-2xl shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:scale-105' : '';

  const classes = `
    ${baseClasses}
    ${hoverClasses}
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-6 ${className}`}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 ${className}`}>
    {children}
  </div>
);

export default Card;