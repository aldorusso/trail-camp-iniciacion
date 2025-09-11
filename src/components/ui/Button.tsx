'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Estilos base inspirados en Nike
          'inline-flex items-center justify-center font-nike font-semibold',
          'rounded-full transition-all duration-200 focus:outline-none focus:ring-2',
          'hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
          'uppercase tracking-wide',
          
          // Variantes de color
          {
            'bg-dark-950 text-white hover:bg-dark-800 focus:ring-dark-300': variant === 'primary',
            'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300': variant === 'secondary',
            'border-2 border-dark-950 text-dark-950 hover:bg-dark-950 hover:text-white focus:ring-dark-300': variant === 'outline',
            'text-dark-950 hover:bg-dark-100 focus:ring-dark-200': variant === 'ghost',
          },
          
          // Tamaños
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
            'px-10 py-5 text-xl': size === 'xl',
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };