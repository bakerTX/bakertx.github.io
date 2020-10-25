import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import InlineAddress from '../components/InlineAddress';
import resumeFile from '../resume.pdf';

const Home = () => {
  return (
    <div className="flex-container">
      <header>
        <h1 className="hero-text">
          Aaron Baker is a front end website developer working in Los Angeles, CA.
        </h1>
      </header>
      <main>
        <div>
          <h2>Projects</h2>
          <p>Here are some things I&#39;ve been working on lately.</p>
          <h3>SpaceX</h3>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.spacex.com">SpaceX.com</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.starlink.com">Starlink.com</a></li>
          </ul>
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
          my current work availability, contact me at
          {'  '}
          <InlineAddress />
          .
        </p>
        <details open className="resume-accordion">
          <summary>View resume</summary>
          <object type="application/pdf" data={resumeFile} width="100%" height="600">
            <a href={resumeFile} alt="Download resume">Download resume</a>
          </object>
        </details>
      </footer>
    </div>
  );
};

export default Home;
