import { forwardRef } from 'react';
import classNames from 'classnames';

export const Select = forwardRef(({
  label,
  error,
  options = [],
  className,
  ...props
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={classNames(
          'block w-full rounded-md border-gray-300 shadow-sm',
          'focus:border-primary focus:ring-primary sm:text-sm',
          'text-gray-900 bg-white',
          'px-3 py-2',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});
