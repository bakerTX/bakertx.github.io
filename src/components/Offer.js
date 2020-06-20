import React from 'react';

import InlineAddress from './InlineAddress';

import './Offer.css';

const Offer = () => (
  <>
    <h2>Offer</h2>
    <div className="offer__container">
      <h3>Like this site?</h3>
      <p className="offer__description">
        I decided to start offering my websites to the world. My dream is to build websites for people and to make a living from it. Right now, I specialize in creating lightweight, portable, and quickly deployed websites for individuals and
        {' '}
        <em>small</em>
        {' '}
        businesses. 😀
        <br />
        My favorite websites are hand-made and made with care. While I won&#39;t be able to build the next world class Amazon competitor website for you, I can offer a solid and reponsive site - customized to your preferences. Your new site will be fast to load and accessible from anywhere.
        <br />
        If you&#39;re interested in something like this, let&#39;s talk. You can find me at
        {' '}
        <InlineAddress />
        .
      </p>
      <h3 className="offer__price">$200</h3>
    </div>
  </>
);

export default Offer;
