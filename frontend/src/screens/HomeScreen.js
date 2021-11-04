import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Image } from 'react-bootstrap';

// import Location from '../components/Location';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
import Ferry from '../images/EdmondsFerryOlympicsFullI.jpg';

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
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {locations.map((location) => (
            <Col key={location.id} sm={12} md={12} lg={6} xl={6}>
              <Location location={location} />
            </Col>
          ))}
        </Row>
      )} */}
    </>
  );
};

export default HomeScreen;
