import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FlexBox from "../../components/FlexBox/FlexBox";
import SignInForm from "../../components/SignInForm/SignInForm";
import Logo from "../../components/Logo/Logo";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import * as authActions from "../../redux/auth/actions";

const SignIn = props => {
  const { isSignIn, loadingState = true, postSignIn } = props;
  const [identityValue, setIdentityValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleIdentityValue = event => setIdentityValue(event.target.value);
  const handlePasswordValue = event => setPasswordValue(event.target.value);

  const handleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    const userInformation = {
      identity: identityValue,
      password: passwordValue
    };

    postSignIn({ userInformation });
  };

  // When client sign in successed or try to access the SignIn page after signin.
  const checkSignIn = () => (isSignIn ? <Redirect to="/main" /> : <></>);

  return (
    <>
      {checkSignIn()}
      <FlexBox
        wrap="wrap"
        column="column"
        align="center"
        justify="center"
        maxHeight
      >
        <LoadingSpinner loadingState={loadingState.signIn}>
          <Logo size="large" spin />
          <SignInForm
            handleSubmit={handleSubmit}
            handleIdentityValue={handleIdentityValue}
            handlePasswordVaule={handlePasswordValue}
            signupUrl="/signup"
          />
        </LoadingSpinner>
      </FlexBox>
    </>
  );
};

SignIn.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
  postSignIn: PropTypes.func.isRequired,
  loadingState: PropTypes.shape({
    signIn: PropTypes.bool
  }).isRequired
};

const mapStateToProps = state => {
  const { auth } = state;
  return {
    isSignIn: auth.isSignIn,
    loadingState: {
      signIn: auth.loadingState.signIn
    }
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
