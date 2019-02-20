import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Import pages.
import Header from './components/Header/Header';
import SignIn from './containers/SignIn/SignIn';
import Main from './containers/Main/Main';
import Project from './containers/Project/Project';
import Exam from './containers/Exam/Exam';
import UserManagement from './containers/UserManagement/UserManagement';
import Admin from './containers/Admin/Admin';

import ErrorPage404 from './containers/Pages/404';

// Router before login.
const AppRouter = ({ isSignIn }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <PrivateRouterComponent isSignIn={isSignIn} path="/main" component={PrivateRouter} />
        <Route component={ErrorPage404}/>
      </Switch>
    </Router>
  );
};

// Router after login.
const PrivateRouter = () => {
  return(
    <Header>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/exam" component={Exam} />
        <Route exact path="/usermanagement" component={UserManagement} />
        <Route exact path="/admin" component={Admin} />
        <Route component={ErrorPage404}/>
      </Switch>
    </Header>
  );
};

// Private Router component
const PrivateRouterComponent = ({ component: Component, isSignIn, ...rest }) => {
  return(
    <Route {...rest} render={props => (
        // Check is signin.
        // TODO chagne to true when test is end
        isSignIn === false
          ? <Component exact {...props} />
          : <Redirect to={{
              pathname: '/signin',
              state: { from: props.location }
            }} />
    )}/>
  );
};

// Map state to props.
const _mapStateToProps = (state) => {
  const auth = state.Auth;
  return { isSignIn: auth.isSignIn };
};

// Connect state to SignIn props.
export default connect(_mapStateToProps)(AppRouter);