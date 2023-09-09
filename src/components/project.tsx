import React from 'react';
import Carousel from '@/components/carousel';
import useImageLoader from '@/Hooks/useImageLoader';

interface Slide {
  url: string;
}

interface ProjectProps {
  projectImages: Slide[];
  date: string;
  address: string;
  index: number;
}

const Project: React.FC<ProjectProps> = ({ projectImages, date, address, index }) => {
  const isEven = index % 2 === 0;
  const imageArray = projectImages.map((slide) => slide.url);

  // useImageLoader hook'unu kullanarak resimleri yükleyin
  const { images, loading, error } = useImageLoader(imageArray);

  return (
    <div className={`flex flex-col sm:flex-row p-4 items-center`}>
      <div className={`w-full sm:w-1/2 mb-4 sm:mb-0 border-2 border-solid border-primary rounded-3xl p-1 ${isEven ? 'order-2 sm:order-1' : 'order-1 sm:order-2'}`}>
        {images && images.length > 0 ? (
          <Carousel autoSlide={false} slides={images.map((img, index) => ({ url: img.src, alt: `Resim ${index + 1}` }))} showFooter={false} />
        ) : (
          // images dizisi boşsa veya yükleme sırasında, bir yükleme göstergesi görüntüleyin veya uygun bir şey yapın.
          loading ? (
            <div>Resimler yükleniyor...</div>
          ) : (
            <div>{error || 'Resimler bulunamadı.'}</div>
          )
        )}
      </div>
      <div className={`w-full sm:w-1/2 ${isEven ? 'order-1 sm:order-2' : 'order-2 sm:order-1'}`}>
        <div className="p-4">
          <h2 className="text-xl font-bold">Proje Tarihi: {date}</h2>
          <p className="text-gray-500">Proje Adresi: {address}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;

