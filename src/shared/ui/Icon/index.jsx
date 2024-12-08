import { forwardRef } from 'react';
import classNames from 'classnames';

const icons = {
  close: (
    <path 
      fillRule="evenodd" 
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
      clipRule="evenodd" 
    />
  ),
  plus: (
    <path 
      fillRule="evenodd" 
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" 
      clipRule="evenodd" 
    />
  ),
  download: (
    <path 
      fillRule="evenodd" 
      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
      clipRule="evenodd" 
    />
  ),
  share: (
    <path 
      fillRule="evenodd" 
      d="M15 8a3 3 0 100-6 3 3 0 000 6zm-9 3a3 3 0 100-6 3 3 0 000 6zm0 7a3 3 0 100-6 3 3 0 000 6zm9 0a3 3 0 100-6 3 3 0 000 6zM6 10v4m8-4v4m-4-3h4" 
      clipRule="evenodd" 
    />
  ),
  back: (
    <path 
      fillRule="evenodd" 
      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" 
      clipRule="evenodd" 
    />
  ),
};

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

export const Icon = forwardRef(({
  name,
  size = 'md',
  className,
  ...props
}, ref) => {
  if (!icons[name]) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={classNames(
        sizes[size],
        'flex-shrink-0',
        className
      )}
      {...props}
    >
      {icons[name]}
    </svg>
  );
});
