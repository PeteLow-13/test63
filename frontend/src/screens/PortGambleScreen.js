import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TagBar from '../components/TagBar';

const PortGambleScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/locationselect'>
        back to destinations
      </Link>
      <h1>What's the point of going to Port Gamble?</h1>
      <Row>
        <Col md={12}>
          <Image
            src='../images/PortGamble/01PortGambleMainFullScreen.jpg'
            alt='Pt Gamble water towers'
            fluid
          />
        </Col>
      </Row>

      <Row className='know' id='know'>
        <Col>
          <h2>Know the point of going Port Gamble</h2>
          <ol>
            <li>
              <p>
                Visiting Port Gamble is like a trip to the 19th Century. It was
                founded in 1853, by A.J. Pope, Captain William Talbot, and Cyrus
                Walker, and designed to look like their home of East Machias,
                Maine. The town is immaculately maintained, and a U.S. National
                Historic Landmark. The National Park Service called Port Gamble
                "the finest example of a nineteenth century Pacific Coast
                logging community.” Many of the historic homes are now shops.
              </p>
            </li>
            <li>
              <p>
                The general store was the first building constructed, and has
                been in operation since 1853. The store is a charming tourist
                attraction, plus a great spot for food, supplies, and gifts. It
                has a Sea & Shell Museum on the second floor, and a Historical
                Museum in the basement.
              </p>
            </li>
            <li>
              <p>
                The town’s cemetery is a beautiful spot with amazing views. It
                dates from1856, when U.S. Navy sailor, Gustave Englebrecht was
                killed in the Battle of Port Gamble and buried there. He was the
                first U.S. Navy combat casualty in the Pacific. The cemetery
                holds 98 graves for residents of all ages. Most passed away in
                the 19th and early 20th centuries
              </p>
            </li>
          </ol>

          <p className='bonus-point'>
            bonus point: Port Gamble has been the setting for books, movies and
            television programs.
          </p>
        </Col>
        <TagBar />
      </Row>

      <Row className='go' id='go'>
        <Col md={12}>
          <h2>How to go Port Gamble</h2>

          <Image
            src='../images/PortGamble/02PortGambleGoMuseumSign.jpg'
            alt='Pt Gamble sign'
            fluid
          />
          <h3>From Edmonds/Kingston Ferry to Port Gamble</h3>
          <ul>
            <li>
              <p>
                Drive off ferry through Kingston go 5 to 6 miles, to the 5th
                stop light by the Texaco Station.
              </p>
            </li>
            <li>
              At the light turn RIGHT on to Hwy 104 – follow signs to Port
              Gamble/Hood Canal Bridge.
            </li>
            <li>
              Go approximately 2 to 3 miles and you will enter Port Gamble.
            </li>
            <li>
              At the water towers, where the road turns to the left (south), go
              straight onto Rainier Ave.
            </li>
          </ul>
          <h3>From Seattle/Bainbridge Island to Port Gamble</h3>
          <ul>
            <li>
              From Bainbridge Island Ferry, follow SR 305. Follow signs to Hwy 3
              towards Hood Canal (north).
            </li>
            <li>At Hood Canal Bridge continue going straight 1.5 miles.</li>
            <li>
              At the water towers, where the road turns to the right (south),
              take a Left onto Rainier Ave.
            </li>
          </ul>
          <h3>From Tacoma/South to Port Gamble</h3>
          <ul>
            <li>Take SR 16W out of Tacoma and across the Narrows Bridge.</li>
            <li>
              Follow signs to HWY 3 North to Poulsbo and continue on Hwy 3.
            </li>
            <li>At Hood Canal Bridge, continue heading straight 1.5 miles.</li>
            <li>
              At the water towers, where the road turns to the right (south),
              take a Left onto Rainier Ave.
            </li>
          </ul>
        </Col>
        <TagBar />
      </Row>

      <Row className='eat' id='eat'>
        <h2>Where to eat Port Gamble</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/03PortGambleEatScratch.jpg'
              alt='scratch kitchen'
            />
            <Card.Body>
              <Card.Title>Scratch kitchen</Card.Title>
              <Card.Text className='address'>
                32420 N Rainier Ave ​ Port Gamble, WA 98364
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-7636'>(360) 297-7636</a>
              </Card.Text>
              <Card.Text className='description'>
                Good food, cold beer, nice people, awesome view. Local and
                organic ingredients, offering compostable to go products too!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/05PortGambleEatButcherBaker.jpg'
              alt='Butcher & Baker'
            />
            <Card.Body>
              <Card.Title>Butcher & Baker</Card.Title>
              <Card.Text className='address'>
                4719 NE State Highway 104, Port Gamble WA 98364
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel: 360-297-9500'>(360) 297-9500</a>
              </Card.Text>
              <Card.Text className='description'>
                A locally sourced farmhouse restaurant, butcher shop and bakery
                that offers small batch provisions and dining.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/04PortGambleEatGeneralStore.jpg'
              alt='Port Gamble General Store Front'
            />
            <Card.Body>
              <Card.Title>Port Gamble General Store</Card.Title>
              <Card.Text className='address'>
                32400 N Rainier Ave ​Port Gamble, WA 98364
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel: 360-297-7636'>(360) 297-7636</a>
              </Card.Text>
              <Card.Text className='description'>
                A full cafe menu including sandwiches, soups, fresh baked goods,
                ice cream, snacks, an espresso bar, and retail space with gifts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>

      <Row className='drink' id='drink'>
        <h2>Where to Drink Port Gamble</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/06PortGambleDrinkHouse11.jpg'
              alt='House 11 Taproom and Bottle Shop'
            />
            <Card.Body>
              <Card.Title>House 11 Taproom and Bottle Shop</Card.Title>
              <Card.Text className='address'>
                32420 N Rainier Ave. Port Gamble, WA 98364
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-7636'>(360) 297-7636</a>
              </Card.Text>
              <Card.Text className='description'>
                Full bar, cold beer, nice people, awesome view. Local and
                organic ingredients, offering compostable to-go products.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/07PortGambleDrinkGalloping.jpg'
              alt='Galloping Gamble Espresso'
            />
            <Card.Body>
              <Card.Title>Galloping Gamble Espresso</Card.Title>
              <Card.Text className='address'>
                4719 NE State Highway 104, Port Gamble WA 98364
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-688-4441'>(360)-688-4441</a>
              </Card.Text>
              <Card.Text className='description'>
                They serve espresso, brewed coffee and tea, and spritzer drinks.
                Convenient drive-through and walk-up coffee and espresso, right
                on Highway 104.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/08PortGambleDrinkScratch.jpg'
              alt='Scratch Kitchen'
            />
            <Card.Body>
              <Card.Title>Scratch Kitchen</Card.Title>
              <Card.Text className='address'>
                32420 N Rainier Ave, ​Port Gamble, WA 98364
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-7636'>(360) 297-7636</a>
              </Card.Text>
              <Card.Text className='description'>
                Full bar, cold beer, nice people, awesome view. Local and
                organic ingredients, offering compostable to-go products.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>

      <Row className='play' id='play'>
        <h2>Where to Play Port Gamble</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/10PortGamblePlayOlympicOutdoor.jpg'
              alt='Olympic Outdoor Center'
            />
            <Card.Body>
              <Card.Title>Olympic Outdoor Center</Card.Title>
              <Card.Text className='address'>
                32379 N Rainier Ave. ​Port Gamble, WA 98364
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-4659'>360-297-4659</a>
              </Card.Text>
              <Card.Text className='description'>
                Olympic Outdoor Center offers paddle sports events, guided
                tours, instruction, kayak and mountain bike rentals, and gear
                sales, in-store and on-line. Their staff is friendly and
                knowledgeable.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/09PortGamblePlayHeritagePark.jpg'
              alt='Port Gamble Forest Heritage Park'
            />
            <Card.Body>
              <Card.Title>Port Gamble Forest Heritage Park</Card.Title>
              <Card.Text className='address'>
                28901 Highway 104,​ Kingston, WA 98346
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'></a>
              </Card.Text>
              <Card.Text className='description'>
                The largest park in Kitsap County, this Heritage Park contains
                60 miles of walking trails, equestrian trails, biking trails,
                access to water for water trails and kayaking, parking lot. It
                is a pack it in and pack it out type park
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='../images/PortGamble/11PortGamblePlayQuiltedStraight.jpg'
              alt='Quilted Straight'
            />
            <Card.Body>
              <Card.Title>Quilted Straight</Card.Title>
              <Card.Text className='address'>
                32280 Puget Ave NE, ​Port Gamble, WA 98364
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-297-7636'>(360) 297-7636</a>
              </Card.Text>
              <Card.Text className='description'>
                Located in the Old Stables Building, this shop offers the
                quilting classes, and an array of cotton, silk, and wool
                embroidery floss, pearl cotton, embellishment threads, ribbons,
                books, and patterns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>

      <Row className='stay' id='stay'>
        <h2>Where to stay Port Gamble</h2>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='/images/PortGamble/12PortGambleStlayGuestHouses.jpg'
              alt='Port Gamble Guest Houses'
            />
            <Card.Body>
              <Card.Title>Port Gamble Guest Houses</Card.Title>
              <Card.Text className='address'>Port Gamble, Washington</Card.Text>
              <Card.Text className='url'>
                <a href='http://www.portgambleguesthouse.com' target='blank'>
                  www.portgambleguesthouse.com
                </a>
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-447-8473'>(360) 447-8473</a>
              </Card.Text>
              <Card.Text className='description'>
                Historic homes in town can be rented for a special occasion or
                weekend getaway. Guest House 1 is a 3 bedroom 3 bath that sleeps
                10 and Guest House 2 is a 3 bedroom 2 bath which sleeps 8.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='/images/PortGamble/13PortGambleStayPointHotel.jpg'
              alt='The Point Hotel'
            />
            <Card.Body>
              <Card.Title>The Point Hotel</Card.Title>
              <Card.Text className='address'>
                7989 NE Salish Lane, ​Kingston, WA 98346
              </Card.Text>
              <Card.Text className='url'>
                <a href='http;//www.thepointcasinoandhotel.com' target='blank'>
                  www.thepointcasinoandhotel.com
                </a>
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:360-688-4441'>(360)-688-4441</a>
              </Card.Text>
              <Card.Text className='description'>
                This hotel is not far from Port Gamble, with a casino, gym,
                meeting space, a gallery of indigenous artwork, multiple
                eateries and bars, plus a nightclub/music venue. A ferry
                shuttle, and parking for RVs and cars are available.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <Card>
            <Card.Img
              src='/images/PortGamble/14PortGambleStayThorndykeLodge.jpg'
              alt='Thorndyke Lodge'
            />
            <Card.Body>
              <Card.Title>Thorndyke Lodge</Card.Title>
              <Card.Text className='address'>Poulsbo, Washington</Card.Text>
              <Card.Text className='url'>
                <a href='http://www.vrbo.com/355706' target='blank'>
                  www.vrbo.com
                </a>
              </Card.Text>
              <Card.Text className='phone'>
                <a href='tel:'></a>
              </Card.Text>
              <Card.Text className='description'>
                This VRBO House (Sleeps 8-12) and offers a nature preserve-like
                setting by an unspoiled estuary in the Hood Canal, surrounded by
                old-growth forest.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <TagBar />
      </Row>

      <h1>That's the point of going to Port Gamble!</h1>
      <Row>
        <Col md={12}>
          <Image
            src='../images/PortGamble/15PortGambleEndBicycleFullSize.jpg'
            alt='Bicycle with flowers'
            fluid
          />
        </Col>
      </Row>
    </>
  );
};

export default PortGambleScreen;
