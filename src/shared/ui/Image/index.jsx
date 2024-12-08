import { forwardRef } from 'react';
import classNames from 'classnames';

const aspectRatios = {
  auto: 'aspect-auto',
  square: 'aspect-square',
  video: 'aspect-video',
};

export const Image = forwardRef(({
  src,
  alt = '',
  className,
  aspectRatio = 'auto',
  rounded = true,
  ...props
}, ref) => {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={classNames(
        'w-full h-auto object-cover',
        aspectRatios[aspectRatio],
        rounded && 'rounded-lg',
        className
      )}
      {...props}
    />
  );
});
