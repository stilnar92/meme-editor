import { Image } from '@/shared/ui/Image';

export function MemeImage({ src }) {
  return (
    <Image 
      src={src}
      alt="Meme template"
      aspectRatio="video"
      crossOrigin="anonymous"
    />
  );
}
