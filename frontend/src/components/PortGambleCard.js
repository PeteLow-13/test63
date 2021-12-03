import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PortGambleCard = () => {
  return (
    <Card className='my-3 p-3'>
      <Card.Body>
        <Link to={`/portgamble`}>
          <Card.Text as='h3'>Port Gamble</Card.Text>
        </Link>
      </Card.Body>
      <Link to={`/portgamble`}>
        <Card.Img src='../images/PortGambleMainFull.jpg' variant='bottom' />
      </Link>
    </Card>
  );
};

export default PortGambleCard;
