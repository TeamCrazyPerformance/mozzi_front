import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Import pages.
import SignIn from './containers/SignIn';
import Main from './containers/Main';

import ErrorPage404 from './containers/Pages/404';

// Router before login.
const AppRouter = ({ isSignIn }) => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signin" component={SignIn} />
          <PrivateRouterComponent exact isSignIn={isSignIn} path="/main" component={PrivateRouter} />
          <Route component={ErrorPage404}/>
        </Switch>
    </Router>
  );
};

// Private Router component
const PrivateRouterComponent = ({ component: Component, isSignIn, ...rest }) => {
  return(
    <Route {...rest} render={props => (
        // Check is signin.
        isSignIn === true
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/signin',
              state: { from: props.location }
            }} />
    )}/>
  );
};

// Router after login.
const PrivateRouter = () => {
  return(
    <Switch>
      <Route exact path="/main" component={Main} />
    </Switch>
  );
};

// Map state to props.
const _mapStateToProps = (state) => {
  const auth = state.Auth;
  return { isSignIn: auth.isSignIn };
};

// Connect state to SignIn props.
export default connect(_mapStateToProps)(AppRouter);