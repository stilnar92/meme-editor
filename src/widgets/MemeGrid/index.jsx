import { ImageCard } from '@/shared/ui/ImageCard';
import { Box } from '@/shared/ui/Box';
import { List } from '@/shared/ui/List';
import { Loading } from '@/shared/ui/Loading';
import { Error } from '@/shared/ui/Error';

export function MemeGrid({ images, loading, error, onMemeSelect }) {
  if (loading) {
    return <Loading text="Loading memes..." />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <List
      items={images}
      renderItem={(meme) => (
        <Box 
          key={meme.url} 
          className="p-0 w-[150px] h-[150px] flex-shrink-0"
        >
          <ImageCard
            url={meme.url}
            onClick={() => onMemeSelect(meme)}
          />
        </Box>
      )}
      className="bg-black"
    />
  );
}