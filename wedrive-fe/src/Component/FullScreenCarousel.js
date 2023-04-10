import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const FullScreenCarousel = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      infiniteLoop
      autoPlay
      interval={3000}
      transitionTime={500}
    >
      <div>
        <img
          src="https://example.com/image1.jpg"
          alt="Imagen 1"
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <img
          src="https://example.com/image2.jpg"
          alt="Imagen 2"
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <img
          src="https://example.com/image3.jpg"
          alt="Imagen 3"
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        />
      </div>
    </Carousel>
  );
};

export default FullScreenCarousel;
