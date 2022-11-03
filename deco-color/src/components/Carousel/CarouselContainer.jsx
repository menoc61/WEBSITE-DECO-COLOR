import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { urlFor, client } from '../../client';

const CarouselContainer = () => {
  
  const [slides, setslides] = useState([]);
  
  useEffect(() => {
    const query = '*[ _type == "carouselSlide" ]';
      client.fetch(query).then((item) => setslides(item));
  }, [])
  return (
    <Carousel fade={true} pause={true}>
      {slides.map((slide, index) => (
      <Carousel.Item interval={2000} key={slide.header+index}>
        <img
          className="d-block w-100"
          src={urlFor(slide.imagUrl)}
          alt={slide.header}
        />
        <Carousel.Caption>
          <h3>{slide.header}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselContainer;