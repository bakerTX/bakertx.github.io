import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import FourOhFour from './pages/FourOhFour';
import SpendingNotifications from './pages/SpendingNotifications/SpendingNotifications';
import Promotions from './pages/Promotions/Promotions';
import Subscriptions from './pages/Subscriptions/Subscriptions';

// stylesheets
import './home.css';
import './theme.css';
import './util.css';

function App() {
  return (
    <Router>
      <div className="master-container">
        <Switch>
          <Route path="/subscriptions">
            <Subscriptions />
          </Route>
          <Route path="/promotions">
            <Promotions />
          </Route>
          <Route path="/spending-notifications">
            <SpendingNotifications />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
