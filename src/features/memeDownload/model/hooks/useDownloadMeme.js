import { useState, useCallback } from 'react';
import { generateMemeCanvas, canvasToBlob, downloadBlob } from '../../lib/utils/download';

export function useDownloadMeme(containerRef) {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadMeme = useCallback(async () => {
    if (!containerRef.current || isDownloading) return;

    try {
      setIsDownloading(true);
      const canvas = await generateMemeCanvas(containerRef);
      const blob = await canvasToBlob(canvas);
      downloadBlob(blob, 'meme.png');
    } catch (error) {
      console.error('Error generating meme:', error);
    } finally {
      setIsDownloading(false);
    }
  }, [containerRef, isDownloading]);

  return {
    isDownloading,
    downloadMeme,
  };
}
