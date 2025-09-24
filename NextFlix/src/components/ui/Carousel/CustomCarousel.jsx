
import { Carousel } from "flowbite-react";
import "./CustomCarousel.css" 

export function CustomCarousel({slides, height}) {
  return (
    <div>
      <Carousel style={{height: height}}>
        {slides.map((slide, index) => (
            <CustomCarouselSlide key={index} {...slide} />
        ))}
      </Carousel>
    </div>
  );
}

export function CustomCarouselSlide({picturePath, title, paragraph}) {

    return (
        <div 
        style={{backgroundImage: `url('${picturePath}')`}} 
        className="carousel-slide-container flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
        </div>
    );
}
