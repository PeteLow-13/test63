import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TagBar from '../components/TagBar';

const PoulsboScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/destinations'>
        back to destinations
      </Link>
      <h1>What's the point of going to Poulsbo?</h1>
      <Row>
        <Col md={12}>
          <Image
            src='../images/Poulsbo/01PoulsboMainFullSize.jpg'
            alt=''
            fluid
          />
        </Col>
      </Row>

      <Row className='know' id='know'>
        <Col>
          <h2>Know the point of going to ____ </h2>
          <ol>
            <li>
              <p>Know</p>
            </li>
            <li>
              <p>Know</p>
            </li>
            <li>
              <p>Know</p>
            </li>
          </ol>

          <p className='bonus-point'>bonus point:</p>
        </Col>
        <TagBar />
      </Row>

      <Row className='go' id='go'>
        <Col md={12}>
          <h2>How to go Port Gamble</h2>

          <Image src='' alt='' fluid />
          <h3>From...</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>From...</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h3>From...</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col>
        <TagBar />
      </Row>

      <Row className='eat' id='eat'>
        <h2>Where to eat Port Gamble</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>

      <Row className='drink' id='drink'>
        <h2>Where to drink Port Gamble</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='play' id='play'>
        <h2>Where to play Port Gamble</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>Phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>Phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>Phone</a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>

      <Row className='stay' id='stay'>
        <h2>Where to stay Port Gamble</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='url'>
                <a href='http://' target='blank'>
                  url
                </a>
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'></a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='url'>
                <a href='http://' target='blank'>
                  url
                </a>
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'></a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img src='' alt='' />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='url'>
                <a href='http://' target='blank'>
                  url
                </a>
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'></a>
              </Card.Text>
              <Card.Text className='description'>description</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>
      <h1>That's the point of going to _____!</h1>
      <Row>
        <Col md={12}>
          <Image src='../images' alt='' fluid />
        </Col>
      </Row>
    </>
  );
};

export default PoulsboScreen;
