import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignIn from './containers/SignIn/SignIn';

import Header from './components/Header/Header';
import Main from './containers/Main/Main';
import ProjectMain from './containers/Project/ProjectMain';
import ProjectCreate from "./containers/Project/ProjectCreate";
import ProjectView from './containers/Project/ProjectVIew';

import Exam from './containers/Exam/Exam';

import Admin from './containers/Admin/Admin/Admin';
import JoinRequests from './containers/Admin/JoinRequests/JoinRequests';
import Users from './containers/Admin/Users/Users';
import User from './containers/Admin/User/User';

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

const PrivateRouterComponent = ({ component: Component, isSignIn, ...rest }) => {
  return(
    <Route {...rest} render={props => (
        // Check is signin.
        isSignIn === true
          ? <Component exact {...props} />
          : <Redirect to={{
              pathname: '/signin',
              state: { from: props.location }
            }} />
    )}/>
  );
};

const PrivateRouter = () => {
  return(
    <Header>
      <Switch>
        {/* Main page */}
        <Route exact path="/main" component={Main} />
        {/* Project page */}
        <Route exact path="/project" component={ProjectMain} />
        <Route exact path="/project/create" component={ProjectCreate} />
        <Route exact path="/project/:projectId" component={ProjectView} />
        {/* Exam page */}
        <Route exact path="/exam" component={Exam} />
        {/* Admin page */}
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/joinrequests" component={JoinRequests} />
        <Route exact path="/admin/users" component={Users} />
        <Route exact path="/admin/user/:userid" component={User} />
        {/* 404 Error page */}
        <Route component={ErrorPage404}/>
      </Switch>
    </Header>
  );
};

const mapStateToProps = state => {
  const auth = state.auth;
  return { isSignIn: auth.isSignIn };
};

export default connect(mapStateToProps)(AppRouter);