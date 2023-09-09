import { useState, useEffect } from 'react';

interface ImageLoaderResponse {
  images: HTMLImageElement[];
  loading: boolean;
  error: string | null;
}

function useImageLoader(urls: string[]): ImageLoaderResponse {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const imagePromises = urls.map((url) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => {
          resolve(img);
        };

        img.onerror = (err) => {
          reject(err);
        };
      });
    });

    Promise.all(imagePromises)
      .then((loadedImages) => {
        setImages(loadedImages);
        setLoading(false);
      })
      .catch((err) => {
        setError('Resim yüklenirken bir hata oluştu.');
        setLoading(false);
      });
  }, []); // Boş dependency array, sadece ilk render için çalışmasını sağlar.

  return { images, loading, error };
}

export default useImageLoader;
