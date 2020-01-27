import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import checkSignIn from "./redux/checkSignIn";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import ProjectMain from "./containers/Project/ProjectMain/ProjectMain";
// import Projects from "./containers/Project/Projects/Projects";
// import ProjectEdit from "./containers/Project/ProjectEdit/ProjectEdit";
// import Project from "./containers/Project/Project/Project";
import ExamMain from "./containers/Exam/ExamMain/ExamMain";
import Exams from "./containers/Exam/Exams/Exams";
import ExamEdit from "./containers/Exam/ExamEdit/ExamEdit";
import Exam from "./containers/Exam/Exam/Exam";
import Admin from "./containers/Admin/Admin/Admin";
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

const PrivateRouter = () => (
  <Header>
    <Switch>
      {/* Main page */}
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      {/* Project page */}
      <Route exact path="/project" component={ProjectMain} />
      {/* <Route exact path="/project/projects" component={Projects} />
      <Route exact path="/project/project/create" component={ProjectEdit} />
      <Route exact path="/project/project/:projectId" component={Project} />
      <Route
        exact
        path="/project/project/:projectId/edit"
        component={ProjectEdit}
      /> */}
      {/* Exam page */}
      <Route exact path="/exam" component={ExamMain} />
      <Route exact path="/exam/exams" component={Exams} />
      <Route exact path="/exam/exam/create" component={ExamEdit} />
      <Route exact path="/exam/exam/:examId" component={Exam} />
      <Route exact path="/exam/exam/:examId/edit" component={ExamEdit} />
      {/* Admin page */}
      <Route exact path="/admin" component={Admin} />
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
  const { isSignIn } = props;
  return (
    <Router>
      <Switch>
        <RouterSelectorComponent isSignIn={isSignIn} />
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = {
  isSignIn: PropTypes.bool.isRequired
};

const RouterSelectorComponent = props => {
  const { isSignIn, location } = props;

  checkSignIn();

  if (isSignIn === true) {
    if (location.pathname === "/signin") return <Redirect to="main" />;

    return <PrivateRouter />;
  }

  return <PublicRouter />;
};

RouterSelectorComponent.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

RouterSelectorComponent.defaultProps = {
  location: {
    pathName: "/"
  }
};

const mapStateToProps = state => {
  const { auth } = state;
  return { isSignIn: auth.isSignIn };
};

export default connect(mapStateToProps)(AppRouter);
