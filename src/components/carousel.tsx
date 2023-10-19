import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CircleDot } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { themeSelector } from "@/redux/themeSlice/themeSlice";

interface Slide {
  url: string;
}

interface CarouselProps {
  slides: Slide[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  showFooter?: boolean
}

export default function Carousel({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  showFooter = true
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [color, setColor] = useState<string>('');

  const selectedTheme = useAppSelector(themeSelector)

const prevSlide = () => {
    setCurrentIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if(selectedTheme.selectedTheme === 'light') {
      setColor('black')
    }else {
      setColor('white')
    }
  },[selectedTheme])


  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[100%] lg:h-[640px] h-[320px] w-full m-auto py-2 px-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Sol Ok */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Sağ Ok */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
      {showFooter ? (
        <div className="flex justify-center">
        {slides.map((_slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer flex mt-2 align-middle items-center`}
            style={{
                transition: "width 1s, height 1s", // Transition efekti eklemek için stil içinde transition özelliği kullanılır
              }}
          >
            <CircleDot
              color={color}
              size={`${currentIndex === slideIndex ? "18px" : "16px"}`}
            />
          </div>
        ))}
      </div>
      ): <></>}
    </div>
  );
}
