import Carousel from "@/components/carousel";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  // const slides: string[] = [
  //   "https://loremflickr.com/1280/720?lock=1",
  //   "https://loremflickr.com/1280/720?lock=2",
  //   "https://loremflickr.com/1280/720?lock=3",
  //   "https://loremflickr.com/1280/720?lock=4",
  // ];
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
  
  return (
    <div className="h-screen bg-black-50">
      {/* <Navbar /> */}
      <div className="block">
         {/* <Carousel autoSlide={true} autoSlideInterval={3000}>
        {slides.map((image: string, index: number) => (
          <img key={index} src={image} alt="" />
        ))}
      </Carousel> */}
      <Carousel slides={slides1} autoSlide={false}/>
      </div>
      <div>
        <Separator className="mt-6"/>
      </div>
    </div>
  );
};
export default Home;
