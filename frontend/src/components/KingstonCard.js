import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const KingstonCard = () => {
  return (
    <Card className='my-3 p-3'>
      <Card.Body>
        <Link to={`/kingston`}>
          <Card.Text as='h3'>Kingston</Card.Text>
        </Link>
      </Card.Body>
      <Link to={`/kingston`}>
        <Card.Img
          src='../images/Kingston/01KingstonMainFullSize.jpg'
          variant='bottom'
        />
      </Link>
    </Card>
  );
};

export default KingstonCard;
