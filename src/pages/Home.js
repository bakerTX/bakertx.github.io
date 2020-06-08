import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [revolvingIndex, setRevolvingIndex] = useState(0);

  const rotatingInterests = [
    'web accessibility',
    'flexbox',
    'SEO',
    'domain management',
    'analytics',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (revolvingIndex < rotatingInterests.length - 1) {
        setRevolvingIndex(revolvingIndex + 1);
      } else {
        setRevolvingIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const email = 'ab@aaronbaker.dev';
  return (
    <div className="flex-container">
      <header>
        <h1 className="hero-text">
          Aaron Baker is a front end website developer working in Austin, TX.
        </h1>
      </header>
      <main>
        <div className="description">
          <p>
            I specialize in translating visual designs into responsive and
            sensible user interfaces, using CSS and React.
          </p>

          <p>
            I&#39;ve worked on the front end of enterprise-level software
            applications for 4 years.
          </p>

          <p>
            Right now, I&#39;m learning more about
            {' '}
            <span className="rotating-interest">
              {rotatingInterests[revolvingIndex]}
              .
            </span>
          </p>
        </div>
        <div>
          <h2>Projects</h2>
          <p>Here are some things I&#39;ve been working on lately.</p>
          <h3>IBM</h3>
          <ul>
            <li>
              <Link to="/spending-notifications">Spending Notifications</Link>
            </li>
            <li>
              <Link to="/promotions">Promotions</Link>
            </li>
            <li>
              <Link to="/subscriptions">Subscriptions</Link>
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <h2>Contact me</h2>
        <p>
          If you&#39;re interested in collaborating on a project or discussing
          my current work availability, please contact me with an email at
          {'  '}
          <address className="inline-address">
            <a href={`mailto:${email}`}>{email}</a>
          </address>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;
