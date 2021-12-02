import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TagBar from '../components/TagBar';

const KingstonScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/destinations'>
        back to destinations
      </Link>
      <h1>What's the point of going to Kingston?</h1>
      <Row>
        <Col md={12}>
          <Image
            src='../images/Kingston/01KingstonMainFullSize.jpg'
            alt='ferry at kingston terminal'
            fluid
          />
        </Col>
      </Row>

      <Row className='know' id='know'>
        <Col>
          <h2>Know the point of going to Kingston</h2>
          <ol>
            <li>
              <p>
                Kingston’s name started out as a joke. Originally founded in
                1853 by Benjamin Bannister, it was known as "Appletree Cove”. In
                1874, a man named Michael King moved to the area and started a
                logging operation. He built many small buildings and shacks
                along the shore for his men and animals, but in1882, he moved
                on. The shacks and bunkhouses were left behind and lived in by
                drifters, squatters and old loggers. As a joke, folks starting
                referring to it as "King \' s Town”. The name evolved into
                Kingston and the joke stuck.
              </p>
            </li>
            <li>
              <p>
                Just going to Kingston is part of the fun. There are two daily
                ferry systems servicing Kingston. Washington State Ferries carry
                cars and passengers between Kingston and Edmonds, and Kitsap
                Fast Ferries offer passenger-only service between Kingston and
                downtown Seattle. And the town is very walkable, so traveling
                here without a car is easy.
              </p>
            </li>
            <li>
              <p>
                Kingston is home to the My Girl Drive-In and Museum, an
                authentic replica of a 1950’s drive-in restaurant. It houses
                10,000 square feet of collectibles including an extensive
                collection of Elvis and rock and roll memorabilia. Located on 6
                acres in a wooded setting with adequate parking space for large
                outdoor events and barbecues, and it is available for private or
                corporate functions, wedding receptions, retirement or birthday
                parties, high school reunions, family gatherings or fund-raising
                events.
              </p>
            </li>
          </ol>

          <p className='bonus-point'>
            bonus point: Kingston is known as the "Little City by the Sea” and
            the northern gateway to the Olympic Peninsula.
          </p>
        </Col>
        <TagBar />
      </Row>

      <Row className='go' id='go'>
        <Col md={12}>
          <h2>How to go Kingston</h2>

          <Image
            src='../images/Kingston/02KingstonGoPort.jpg'
            alt='Port of Kingston building'
            fluid
          />
          <h3>From Edmonds/Kingston Ferry to Kingston</h3>
          <ul>
            <li>
              Walk or drive onto the Edmonds Kingston Ferry in Edmonds. -Walk or
              drive off ferry in Kingston and you’re there.
            </li>

            <li>Walk or drive off ferry in Kingston and you’re there.</li>
          </ul>
          <h3>From Seattle on the Passenger Ferry to Kingston</h3>
          <ul>
            <li>Walk onto Kingston Passenger Ferry at Seattle Ferry dock.</li>
            <li>Walk off the passenger ferry in Kingston and you’re there.</li>
          </ul>
          <h3>From Seattle/Bainbridge Island to Kingston</h3>
          <ul>
            <li>
              Drive off Bainbridge Island Ferry, follow SR 305 (north) for 7.0
              miles.
            </li>
            <li>Turn right onto Suquamish Way NE and go 1.6 miles.</li>
            <li>
              Suquamish Way NE turns left and becomes Augusta Ave NE and go 0.8
              mile.
            </li>
            <li>Continue onto Miller Bay Rd NE  for 4.3 miles.</li>
            <li>Turn right onto NE West Kingston Rd for 2.1 miles.</li>
            <li>
              Turn left onto Bannister, right on NE Maine, then right onto NE
              State Hwy 104.
            </li>
          </ul>
        </Col>
        <TagBar />
      </Row>

      <Row className='eat' id='eat'>
        <h2>Where to eat Kingston</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/03KingstonEatCrepes.jpg'
              alt='J aime Les Crêpes'
            />
            <Card.Body>
              <Card.Title>J' aime Les Crêpes</Card.Title>
              <Card.Text className='address'>
                11264 NE St Hwy 104,​ Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-5886 '>phone (360) 297-5886 </a>
              </Card.Text>
              <Card.Text className='description'>
                French-style creperie, serving coffee, tea, ice cream, frozen
                yogurt, and crepes, with over 30 Savory and Sweet choices. They
                use traditional tools and techniques to re-create this French
                classic.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/04KingstonEatFillingStation.jpg'
              alt='Filling Station'
            />
            <Card.Body>
              <Card.Title>Filling Station</Card.Title>
              <Card.Text className='address'>
                11200 NE St Hwy 104, Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-7732 '>(360) 297-7732 </a>
              </Card.Text>
              <Card.Text className='description'>
                Established in 1980, The Filling Station is a popular spot for
                locals, and within easy walking distance from the
                Edmonds-Kingston ferry terminal. It is a bar and grill offering
                a wide ranging menu of American staples in a relaxed atmosphere,
                with an outdoor rooftop deck.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/05KingstonEatAlehouse.jpg'
              alt='Kingston Ale House'
            />
            <Card.Body>
              <Card.Title>Kingston Ale House</Card.Title>
              <Card.Text className='address'>
                11225 NE State Hwy 104, Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-881-0412'>phone (360) 881-0412</a>
              </Card.Text>
              <Card.Text className='description'>
                Family friendly restaurant with an emphasis on seafood. Plus a
                pet-friendly deck that overlooks the water. Also has a full bar
                and 20 rotating craft brews on-tap, and a ???
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>

      <Row className='drink' id='drink'>
        <h2>Where to drink Kingston</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/06KingstonDrinkdVineWineBar.jpg'
              alt='dVine wine bar'
            />
            <Card.Body>
              <Card.Title>d’Vine Wine Bar</Card.Title>
              <Card.Text className='address'>
                11225 NE State Hwy 104, Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>(360) 881-0412</a>
              </Card.Text>
              <Card.Text className='description'>
                This is a charming wine bar one block from the ferry terminal,
                specializing in wines from the Pacific Northwest, plus small
                production imports, and craft beers. Their patio overlooks
                Appletree Cove.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/07KingstonDrinkDownpour.jpg'
              alt='Downpour Brewing'
            />
            <Card.Body>
              <Card.Title>Downpour Brewing</Card.Title>
              <Card.Text className='address'>
                10991 NE State Hwy 104, Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-881-0452'>(360) 881-0452</a>
              </Card.Text>
              <Card.Text className='description'>
                Located within walking distance of the ferry dock, the tasting
                room at Downpour Brewing offers bar seating, TVs, picnic tables,
                and a kid’s play area, and outdoor seating.​
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/08KingstonDrinkOvertheMoon.jpg'
              alt='Over the Moon Roasters'
            />
            <Card.Body>
              <Card.Title>Over the Moon Roasters</Card.Title>
              <Card.Text className='address'>
                11229 NE State Hwy 104 #3, Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-638-6156'>(360) 638-6156</a>
              </Card.Text>
              <Card.Text className='description'>
                Specialty coffee shop, family owned and run, with breakfast and
                food items made from freshly prepared ingredients.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='play' id='play'>
        <h2>Where to play Kingston</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/09KingstonPlayFirehouse.jpg'
              alt='Firehouse Theater'
            />
            <Card.Body>
              <Card.Title>Firehouse Theater</Card.Title>
              <Card.Text className='address'>
                11225 NE State Hwy 104, Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-881-0412'>(360) 881-0412</a>
              </Card.Text>
              <Card.Text className='description'>
                This hometown theater shows first run and independent films,,
                with two screens, stadium seating, and space for special events
                and performances. It is located in the historic Kingston
                firehouse, 4 blocks from the ferry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/10KingstonPlayHeronswood.jpg'
              alt='Heronswood Garden'
            />
            <Card.Body>
              <Card.Title>Heronswood Garden</Card.Title>
              <Card.Text className='address'>
                7530 NE 288th Street, ​Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-9620'>(360) 297-9620</a>
              </Card.Text>
              <Card.Text className='description'>
                Heronswood is a botanical garden with a unique collection of
                plants from the Americas, Asia, Eastern Europe, South Africa,
                New Australia & Zealand. It is owned and maintained by the
                S’Klallam Tribe, and open Wednesday through Sunday, 10am to 3pm.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/11KingstonPlayMikeWallaceChairs.jpg'
              alt='Mike Wallace Park'
            />
            <Card.Body>
              <Card.Title>Mike Wallace Park</Card.Title>
              <Card.Text className='address'>address</Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'>Phone</a>
              </Card.Text>
              <Card.Text className='description'>
                Mike Wallace Park is a nice place to picnic and view activity in
                Kingston. Sitting by the ferry terminal and running past the
                marina, it has large grassy field and a gazebo. Some of
                Kingston’s other parks and trails are listed below. Other
                Parks:​ Saltair Beach Park, ​Saltair Beach Park, Kingston Eglon
                Trailhead​, North Kitsap Heritage Park
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>

      <Row className='stay' id='stay'>
        <h2>Where to stay Kingston</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/12KingstonStayBandB.jpg'
              alt='Phoenix Bed & Breakfast'
            />
            <Card.Body>
              <Card.Title>Phoenix Bed & Breakfast</Card.Title>
              <Card.Text className='address'>
                9120 NE Kiwi Lane​, Kingston, WA 98346
              </Card.Text>
              <Card.Text className='url'>
                <a href='http://' target='blank'>
                  is this Right?
                </a>
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-8175'>(360)-297-8175</a>
              </Card.Text>
              <Card.Text className='description'>
                This Bed & Breakfast was rebuilt by the TV show "Extreme
                Makeover: Home Edition”. It has a private Bed & Breakfast wing.
                Located in a quiet country setting on 5 beautiful acres and
                surrounded by tall trees.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/13KingstonStayVRBO.jpg'
              alt='vrbo logo'
            />
            <Card.Body>
              <Card.Title>VRBO in Kingston</Card.Title>

              <Card.Text className='url'>
                <a
                  href='https://www.vrbo.com/vacation-rentals/usa/washington/puget-sound/puget-sound-north/kingston'
                  target='blank'
                >
                  VRBO
                </a>
              </Card.Text>

              <Card.Text className='description'>
                Vrbo has many vacation houses and cabins available near
                Kingston. Prices start at $175 per night, and houses and cabins
                are popular options.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/Kingston/14KingstonStayPointHotel.jpg'
              alt='The Point Hotel'
            />
            <Card.Body>
              <Card.Title>The Point Hotel</Card.Title>
              <Card.Text className='address'>
                7989 NE Salish Lane, ​Kingston, WA 98346
              </Card.Text>
              <Card.Text className='url'>
                <a href='http://www.thepointcasinoandhotel.com' target='blank'>
                  www.thepointcasinoandhotel.com
                </a>
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-688-4441'>(360)-688-4441</a>
              </Card.Text>
              <Card.Text className='description'>
                This hotel is 5 miles from Kingston ferry, with a casino, gym,
                meeting space, a gallery of indigenous artwork, a courtyard,
                multiple eateries and bars, and a nightclub/music venue. A ferry
                shuttle, and parking for RVs and cars are available.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>
      <h1>That's the point of going to Kingston!</h1>
      <Row>
        <Col md={12}>
          <Image
            src='../images/Kingston/15KingstonEndClockFullSize.jpg'
            alt='Kingston clock and ferry'
            fluid
          />
        </Col>
      </Row>
    </>
  );
};

export default KingstonScreen;
