
import useImageLoader from '@/Hooks/useImageLoader';
import Carousel from '@/components/carousel';
import { Separator } from '@/components/ui/separator';

const Home = () => {
  const slides1 = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://loremflickr.com/1280/720?lock=4',
    },
  ];

  // slides1 içinden sadece URL'leri içeren bir dizi oluşturun
  const imageArray = slides1.map((slide) => slide.url);

  // useImageLoader hook'unu kullanarak resimleri yükleyin
  const { images, loading, error } = useImageLoader(imageArray);

  return (
    <div className="h-screen bg-black-50">
      <div className="block">
        {/* images dizisi doluysa Carousel bileşenini kullanın */}
        {images && images.length > 0 ? (
          <Carousel autoSlide={false} slides={images.map((img, index) => ({ url: img.src, alt: `Resim ${index + 1}` }))} />
        ) : (
          // images dizisi boşsa veya yükleme sırasında, bir yükleme göstergesi görüntüleyin veya uygun bir şey yapın.
          loading ? (
            <div>Resimler yükleniyor...</div>
          ) : (
            <div>{error || 'Resimler bulunamadı.'}</div>
          )
        )}
      </div>
      <div>
        <Separator className="mt-6" />
      </div>
    </div>
  );
};

export default Home;
