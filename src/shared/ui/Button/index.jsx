import { forwardRef } from 'react';
import classNames from 'classnames';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary/90',
  secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
  danger: 'bg-red-500 text-white hover:bg-red-600',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  className,
  fullWidth,
  type = 'button',
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={classNames(
        'rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/50',
        'inline-flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
