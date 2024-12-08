import { useState, useEffect } from 'react';
import { memeApi } from '@/shared/api/memeApi';

export function useMemeImages() {
  const [memeImages, setMemeImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemeImages = async () => {
      try {
        setIsLoading(true);
        const images = await memeApi.getImages();
        setMemeImages(images);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemeImages();
  }, []);

  return { memeImages, isLoading, error };
}
