import React from 'react';

import './home.css';
import './theme.css';
import './util.css';

function App() {
  const rotatingInterests = [
    'web accessibility',
    'website discoverability with SEO',
    'flexbox',
    'server side rendering',
  ];

  const random = Math.floor(Math.random() * rotatingInterests.length);
  return (
    <div className="master-container">
      <div className="flex-item">
        <header>
          <h1 className="hero-text">
            Aaron Baker is a front end website developer working in Austin, TX.
          </h1>
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
              {rotatingInterests[random]}
              .
            </span>
          </p>
        </header>
        <h2>Contact me</h2>
        <p>
          If you&#39;re interested in collaborating on a project, or in
          discussing my current work availability, please contact me with an
          email at
          {'  '}
          <address className="inline-address">
            <a href="mailto:aaronbaker9210@gmail.com">
              aaronbaker9210@gmail.com
            </a>
          </address>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
