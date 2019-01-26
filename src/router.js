import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import pages.
import SignIn from './containers/SignIn';
import Main from './containers/Main';
import Fzf from './containers/Pages/404';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/main" component={Main}/>
          <Route component={Fzf}/>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter