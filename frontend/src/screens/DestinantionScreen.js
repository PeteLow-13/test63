import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PoulsboCard from '../components/PoulsboCard';
import PointNoPointCard from '../components/PointNoPointCard';
import PortGambleCard from '../components/PortGambleCard';
import KingstonCard from '../components/KingstonCard';

const DestinantionScreen = () => {
  return (
    <>
      <Link to='/' className='btn btn-light'>
        Home
      </Link>
      <h1>Destinantions</h1>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6}>
          <PoulsboCard />
        </Col>
        <Col sm={12} md={12} lg={6} xl={6}>
          <PointNoPointCard />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6}>
          <KingstonCard />
        </Col>
        <Col sm={12} md={12} lg={6} xl={6}>
          <PortGambleCard />
        </Col>
      </Row>
    </>
  );
};

export default DestinantionScreen;
