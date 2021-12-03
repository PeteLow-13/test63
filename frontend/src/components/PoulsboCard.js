import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PoulsboCard = () => {
  return (
    <Card className='my-3 p-3'>
      <Card.Body>
        <Link to={`/poulsbo`}>
          <Card.Text as='h3'>Poulsbo</Card.Text>
        </Link>
      </Card.Body>
      <Link to={`/poulsbo`}>
        <Card.Img src='../images/PoulsboMainFull.jpg' variant='bottom' />
      </Link>
    </Card>
  );
};

export default PoulsboCard;
