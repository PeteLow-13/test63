import React from 'react';
import { Carousel, Image, Card } from 'react-bootstrap';
import PortGambleCard from './PortGambleCard';
import KingstonCard from './KingstonCard';
import PoulsboCard from './PoulsboCard';
import PointNoPointCard from './PointNoPointCard';

const DestinationCarousel = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <PointNoPointCard />
        </Carousel.Item>
        <Carousel.Item>
          <PoulsboCard />
        </Carousel.Item>
        <Carousel.Item>
          <PortGambleCard />
        </Carousel.Item>
        <Carousel.Item>
          <KingstonCard />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default DestinationCarousel;
