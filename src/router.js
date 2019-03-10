import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Public component.
import SignIn from './containers/SignIn/SignIn';

// Private components.
import Header from './components/Header/Header';
import Main from './containers/Main/Main';
import Project from './containers/Project/Project';
import Exam from './containers/Exam/Exam';

// Admin container components.
import Admin from './containers/Admin/Admin';
import JoinRequests from './containers/Admin/JoinRequests';
import Users from './containers/Admin/Users';
import User from './containers/Admin/User';

import ErrorPage404 from './containers/Pages/404';

// Router before login.
const AppRouter = ({ isSignIn }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <PrivateRouterComponent isSignIn={isSignIn} component={PrivateRouter} />
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
        {/* Main page */}
        <Route exact path="/main" component={Main} />
        {/* Project page */}
        <Route exact path="/project" component={Project} />
        {/* Exam page */}
        <Route exact path="/exam" component={Exam} />
        {/* Admin page */}
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/joinrequests" component={JoinRequests} />
        <Route exact path="/admin/users" component={Users} />
        <Route exact path="/admin/users/:userid" component={User} />
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