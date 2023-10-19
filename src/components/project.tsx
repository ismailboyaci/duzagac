import React from 'react';
import Carousel from '@/components/carousel';
import { Separator } from './ui/separator';
import { Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import  DtSvg  from '@/components/dtSvg';
import useGetImages from '@/Hooks/getImages';

interface Slide {
  url: string;
}

interface ProjectProps {
  projectImages?: Slide[];
  date: string;
  address: string;
  index: number;
  name: string;
  total: number;
}

const Project: React.FC<ProjectProps> = ({ date, address, index, name, total }) => {
  const isEven = index % 2 === 0;

  // useImageLoader hook'unu kullanarak resimleri yükleyin
  const images = useGetImages(name, total);
  const changedDate = new Date(date);
  const formattedDate = format(changedDate, 'dd MMMM yyyy', {locale:tr})

  return (
    <div className={`flex flex-col sm:flex-row p-4 items-center`}>
      <div className={`w-full sm:w-1/2 mb-4 sm:mb-0 border-2 border-solid border-primary bg-secondary rounded-3xl p-1 ${isEven ? 'order-1 sm:order-2' : 'order-1 sm:order-2'}`}>
        {!images.loading && images.imageUrls.length > 0 ? (
          <Carousel autoSlide={false} slides={images.imageUrls.map((img, index) => ({ url: img, alt: `Resim ${index + 1}` }))} showFooter={false} />
        ) : (
          // images dizisi boşsa veya yükleme sırasında, bir yükleme göstergesi görüntüleyin veya uygun bir şey yapın.
          images.loading ? (
            <div>Resimler yükleniyor...</div>
          ) : (
            <div>{ 'Resimler bulunamadı.'}</div>
          )
        )}
      </div>
      <div className={`w-full sm:w-1/2 ${isEven ? 'order-1 sm:order-2' : 'order-2 sm:order-1'}`}>
        <div className={`p-4 block md:flex md:flex-col ${isEven ? ' items-start' : ' items-end'}`}>
          <p className="text-xl font-bold">{name}</p>
          <p className="text-primary/80 flex gap-2 mb-2">
            <Calendar />
             {formattedDate}</p>
          <p className="text-primary/80 flex gap-2">
            <MapPin />
            {address}</p>
        </div>
      <Separator color='white' className='border-1' />
      <div className={`hidden md:flex opacity-10 ${isEven ? 'justify-end' : 'justify-start'}`}>
      <DtSvg width='148px' height='148px' fill='black' />
      </div>
      </div>
    </div>
  );
};

export default Project;

