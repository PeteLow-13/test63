import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PointNoPointCard = () => {
  return (
    <Card className='my-3 p-3'>
      <Card.Body>
        <Link to={`/pointnopoint`}>
          <Card.Text as='h3'>Point No Point</Card.Text>
        </Link>
      </Card.Body>
      <Link to={`/pointnopoint`}>
        <Card.Img src='../images/PointNoPointMainFull.jpg' variant='bottom' />
      </Link>
    </Card>
  );
};

export default PointNoPointCard;
