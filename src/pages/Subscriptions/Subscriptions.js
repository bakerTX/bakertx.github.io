import React from 'react';
import { Link } from 'react-router-dom';

// images
import Page from './images/page.png';
import BarChart from './images/bar-chart.png';
import LineChart from './images/line-chart.png';

const Subscriptions = () => (
  <>
    <header>
      <h1 className="hero-text">
        IBM Project:
        {' '}
        <br />
        {' '}
        Subscriptions
      </h1>
      <span className="hero-tagline">Front end developer</span>
    </header>
    <main>
      <div className="description">
        <p>
          The subscriptions page gives the user detailed information about the
          burndown of their cloud platform subscriptions. We implement reusable
          data visualation components to convey this information quickly and
          efficiently, while adhering to a consistent IBM design language.
        </p>
        <div className="tag-container">
          <div className="highlight tag">Data visualization</div>
          <div className="highlight tag">Internationalization</div>
          <div className="highlight tag">User Experience</div>
          <div className="highlight tag">GraphQL</div>
          <div className="highlight tag">APIs</div>
        </div>
        <img className="project-image" src={Page} alt="subscriptions page" />
        <img
          className="project-image"
          src={LineChart}
          alt="subscriptions page line chart"
        />
        <img
          className="project-image"
          src={BarChart}
          alt="subscriptions page bar chart"
        />
      </div>
    </main>
    <footer>
      <Link to="/">Go back home</Link>
    </footer>
  </>
);

export default Subscriptions;
