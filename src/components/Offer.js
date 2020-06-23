import React from 'react';

import InlineAddress from './InlineAddress';

import './Offer.css';

const Offer = () => (
  <>
    <h2>Offer</h2>
    <div className="offer__container">
      <h3>Like this site?</h3>
      <p className="offer__description">
        I decided to start offering my websites to the world. I&#39;m offering a fast, responsive, and quickly deployed website for individuals in need of a personal portfolio or any sort of lightweight web presence.
      </p>
      <p className="offer__description">
        My favorite websites are hand made and made with care. While I can&#39;t offer you the next world class Amazon competitor, I can offer a solid and responsive website that is customized to your needs.
      </p>
      <p className="offer__description">
        If you&#39;re interested, let&#39;s talk. You can find me at
        {' '}
        <InlineAddress />
        .
      </p>
    </div>
  </>
);

export default Offer;
