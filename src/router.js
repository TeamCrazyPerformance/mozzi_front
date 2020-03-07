import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "./redux/auth/actions";
import checkSignIn from "./redux/checkSignIn";
import ScrollOnTopHelper from "./helpers/scrollOnTopHelper";

import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import Projects from "./containers/Project/Projects/Projects";
import ProjectEdit from "./containers/Project/ProjectEdit/ProjectEdit";
import Project from "./containers/Project/Project/Project";
import Exams from "./containers/Exam/Exams/Exams";
import ExamEdit from "./containers/Exam/ExamEdit/ExamEdit";
import Exam from "./containers/Exam/Exam/Exam";
import JoinRequests from "./containers/Admin/JoinRequests/JoinRequests";
import Users from "./containers/Admin/Users/Users";
import UserInformation from "./containers/UserInformation/UserInformation/UserInformation";
import UserInformationEdit from "./containers/UserInformation/UserInformationEdit/UserInformationEdit";
import ErrorPage404 from "./containers/Pages/404";

const PublicRouter = () => (
  <Switch>
    {/* Sign in page */}
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signin" component={SignIn} />
    {/* Sign up page */}
    <Route exact path="/signup" component={SignUp} />
    {/* 404 Error page */}
    <Route component={ErrorPage404} />
  </Switch>
);

const PrivateRouter = ({ signOut, userId, role }) => (
  <Header signOut={signOut} userId={userId} role={role}>
    <Switch>
      {/* Main page */}
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      {/* Project page */}
      <Route exact path="/project/projects" component={Projects} />
      <Route exact path="/project/project/create" component={ProjectEdit} />
      <Route exact path="/project/project/:projectId" component={Project} />
      <Route
        exact
        path="/project/project/:projectId/edit"
        component={ProjectEdit}
      />
      {/* Exam page */}
      <Route exact path="/exam/exams" component={Exams} />
      <Route exact path="/exam/exam/create" component={ExamEdit} />
      <Route exact path="/exam/exam/:examId" component={Exam} />
      <Route exact path="/exam/exam/:examId/edit" component={ExamEdit} />
      {/* Admin page */}
      <Route exact path="/admin/joinrequests" component={JoinRequests} />
      <Route exact path="/admin/users" component={Users} />
      {/* User information page */}
      <Route exact path="/user/:userId" component={UserInformation} />
      <Route exact path="/user/:userId/edit" component={UserInformationEdit} />
      {/* 404 Error page */}
      <Route component={ErrorPage404} />
    </Switch>
  </Header>
);

const AppRouter = props => {
  const { isSignIn, signOut, userId, role } = props;
  return (
    <Router>
      <ScrollOnTopHelper />
      <Switch>
        <RouterSelectorComponent
          isSignIn={isSignIn}
          signOut={signOut}
          userId={userId}
          role={role}
        />
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = {
  isSignIn: PropTypes.bool.isRequired
};

const RouterSelectorComponent = props => {
  const { isSignIn, location, signOut, userId, role } = props;

  checkSignIn();

  if (isSignIn === true) {
    if (location.pathname === "/signin") return <Redirect to="main" />;

    return <PrivateRouter signOut={signOut} userId={userId} role={role} />;
  }

  return <PublicRouter />;
};

PrivateRouter.propTypes = {
  signOut: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

AppRouter.propTypes = {
  signOut: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

RouterSelectorComponent.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  signOut: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

RouterSelectorComponent.defaultProps = {
  location: {
    pathName: "/"
  }
};

const mapStateToProps = state => {
  const { auth } = state;
  return { isSignIn: auth.isSignIn, userId: auth.userId, role: auth.role };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
