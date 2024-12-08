import { forwardRef } from 'react';
import classNames from 'classnames';

const variants = {
  default: 'bg-white',
  primary: 'bg-primary/5',
  secondary: 'bg-gray-50',
  outlined: 'border border-gray-200 bg-white',
  ghost: 'bg-transparent',
};

const paddings = {
  none: 'p-0',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
};

const radiuses = {
  none: 'rounded-none',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
};

const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

export const Box = forwardRef(({
  variant = 'default',
  padding = 'md',
  radius = 'md',
  shadow = 'none',
  as: Component = 'div',
  className,
  children,
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      className={classNames(
        variants[variant],
        paddings[padding],
        radiuses[radius],
        shadows[shadow],
        'relative',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});
