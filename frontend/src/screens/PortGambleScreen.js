import React from 'react';

const PortGambleScreen = () => {
  return (
    <>
      <Link className='btn btn-light my-3' to='/locationselect'>
        back to destinations
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1>What's the point of going to {location.name}?</h1>
        </>
      )}
    </>
  );
};

export default PortGambleScreen;
