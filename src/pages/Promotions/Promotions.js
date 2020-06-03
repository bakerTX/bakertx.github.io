import React from 'react';
import { Link } from 'react-router-dom';

// images
import Modal from './images/modal.png';
import Page from './images/page.png';

const Promotions = () => (
  <>
    <header>
      <h1 className="hero-text">
        IBM Project:
        {' '}
        <br />
        {' '}
        Promotions
      </h1>
      <span className="hero-tagline">Lead front end developer</span>
    </header>
    <main>
      <div className="description">
        <p>
          The promotions page allows a user to redeem promotion codes, unlocking
          credit for their cloud platform account. We show a list of currently
          applied promo codes, their timeframes and remaining credits. We show
          the hypothetical effects of a promo code before it is applied, and
          allow the user to confirm its application. The components on this page
          have been designed and built in a way to be fully reusable and are
          being installed and used in a variety of other place of our cloud
          platform.
        </p>
        <div className="tag-container">
          <div className="highlight tag">Reusable components</div>
          <div className="highlight tag">Accessibility</div>
          <div className="highlight tag">Internationalization</div>
          <div className="highlight tag">User Experience</div>
          <div className="highlight tag">GraphQL</div>
          <div className="highlight tag">APIs</div>
        </div>
        <img className="project-image" src={Page} alt="promotions page" />
        <img
          className="project-image"
          src={Modal}
          alt="promotions reusable modal component"
        />
      </div>
    </main>
    <footer>
      <Link to="/">Go back home</Link>
    </footer>
  </>
);

export default Promotions;
