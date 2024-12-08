import { Box } from '@/shared/ui/Box';

export function ImageCard({ url, onClick }) {
  return (
    <Box 
      className="p-1 w-full h-full cursor-pointer overflow-hidden rounded-lg hover:opacity-80 transition-opacity"
      onClick={onClick}
    >
      <img
        src={url}
        alt="meme template"
        className="w-full h-full object-cover"
      />
    </Box>
  );
}
