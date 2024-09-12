import React from "react";
import AliceCarousel from "react-alice-carousel";

function Carousel() {
  const items = [
    <img src="/carousel/1.jpg" alt="carousel image" className="w-[50%] m-auto"/>,
    <img src="/carousel/2.jpg" alt="carousel image" className="w-[50%] m-auto"/>,
    <img src="/carousel/3.jpg" alt="carousel image" className="w-[50%] m-auto"/>,
    <img src="/carousel/4.jpg" alt="carousel image" className="w-[50%] m-auto"/>,
    <img src="/carousel/5.jpg" alt="carousel image" className="w-[50%] m-auto"/>,
    <img src="/carousel/6.jpg" alt="carousel image" className="w-[50%] m-auto"/>,
  ];

  const responsive = {
    items: 1,
  };

  return (
    <div className="md:w-[90%] m-auto">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
}

export default Carousel;
