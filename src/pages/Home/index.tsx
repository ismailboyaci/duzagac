

import Carousel from '@/components/carousel';
import { Separator } from '@/components/ui/separator';
import  Loader  from '@/components/loader';
import useGetImages from '@/Hooks/getImages';

const Home = () => {

  const newImageArr = useGetImages('all',0)

  return (
    <div className="h-screen bg-secondary mt-16 absolute w-full">
      <div className="block">
        {/* images dizisi doluysa Carousel bileşenini kullanın */}
        {!newImageArr.loading && newImageArr.imageUrls.length > 0 ? (
          <Carousel autoSlide={false} slides={ newImageArr.imageUrls.map((img, index) => ({ url: img, alt: `Resim ${index + 1}` }))} />
        ) : (
          // images dizisi boşsa veya yükleme sırasında, bir yükleme göstergesi görüntüleyin veya uygun bir şey yapın.
          newImageArr.loading ? (
            <div><Loader /></div>
          ) : (
            <div>{ 'Resimler bulunamadı.'}</div>
          )
        )}
      </div>
      <div>
        <Separator className="mt-6 text-secondary" />
      </div>
    </div>
  );
};

export default Home;
