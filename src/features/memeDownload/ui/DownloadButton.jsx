import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { useDownloadMeme } from '../model/hooks/useDownloadMeme';

export function DownloadButton({ containerRef }) {
  const { isDownloading, downloadMeme } = useDownloadMeme(containerRef);

  return (
    <Button
      type="button"
      fullWidth
      disabled={isDownloading}
      onClick={downloadMeme}
    >
      <Icon name="download" />
      {isDownloading ? 'Generating...' : 'Download Meme'}
    </Button>
  );
}
