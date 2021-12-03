import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Image } from 'react-bootstrap';
import Ferry from '../images/EdmondsFerryOlympicsFullI.jpg';
import DestinationCarousel from '../components/DestinationCarousel';

const HomeScreen = ({}) => {
  return (
    <>
      <h1>The Point of Going</h1>
      <Row>
        <Col md={12}>
          <Image src={Ferry} alt='Photo of ferry and olympic mountains' fluid />
        </Col>
      </Row>
      <h2>Destinations</h2>
      <Row>
        <Col sm={12} md={6} lg={3} xl={3}>
          <DestinationCarousel />
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
