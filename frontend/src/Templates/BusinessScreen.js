import React from 'react';
import leatherShopPH from '../assets/leatherShopPH.jpeg';
import leatherShop2PH from '../assets/leatherShop2PH.jpeg';
import { Col, Row } from 'react-bootstrap';

const BusinessScreen = () => {
  return (
    <>
      <h2>Business Page</h2>
      <iframe
        className=''
        width='512'
        height='288'
        src='https://www.youtube.com/embed/nLMqm0EGq6A'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <h3>About ______ Business</h3>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            mollitia atque fugit pariatur natus praesentium fuga, cumque commodi
            dolorum rerum sunt vitae voluptatum placeat consectetur dolores,
            dolore maxime voluptates quia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            mollitia atque fugit pariatur natus praesentium fuga, cumque commodi
            dolorum rerum sunt vitae voluptatum placeat consectetur dolores,
            dolore maxime voluptates quia.
          </p>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <img
            className='d-block w-100 fluid '
            src={leatherShop2PH}
            alt='First slide'
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <img
            className='d-block w-100 fluid '
            src={leatherShop2PH}
            alt='First slide'
          />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
          <img
            className='d-block w-100 fluid '
            src={leatherShopPH}
            alt='First slide'
          />
        </Col>
      </Row>
    </>
  );
};

export default BusinessScreen;
