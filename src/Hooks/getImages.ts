import { useState, useEffect } from 'react';
import { storage } from "@/services/firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage"

interface IGetImages {
  imageUrls: string[];
  loading: boolean;
  error: string | null;  
}

function useGetImages(name: string, total: number): IGetImages {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const images: string[] = [];

    if(name != 'all'){
      for (let i = 1; i <= total; i++) {
      images.push(name + '-' + i + '.jpeg');
    }
    }

    const fetchImageUrls = async () => {
      try {
        const urls: string[] = [];
        if(name != 'all') {
          for (let i = 0; i < total; i++) {
            const url: string = await getDownloadURL(ref(storage, 'images/' + images[i]));
            urls.push(url);
            console.log(i + 1);
          }
        }else {
          const listRef = await listAll(ref(storage, 'images'))
          await Promise.all(
            listRef.items.map(async (itemRef: any) => {
              const imageUrl = await getDownloadURL(itemRef);
              urls.push(imageUrl)
            })
          );
        }
        setImageUrls(urls);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchImageUrls();
  }, [name, total]);

  return { imageUrls, loading, error };
}

export default useGetImages;
