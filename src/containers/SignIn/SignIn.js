import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FlexBox from "../../components/FlexBox/FlexBox";
import SignInForm from "../../components/SignInForm/SignInForm";
import Logo from "../../components/Logo/Logo";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import * as authActions from "../../redux/auth/actions";

const SignIn = props => {
  const { loadingState = true, postSignIn } = props;
  const [identityValue, setIdentityValue] = useState("ruru14");
  const [passwordValue, setPasswordValue] = useState("1q2w3e");

  const handleIdentityValue = event => setIdentityValue(event.target.value);
  const handlePasswordValue = event => setPasswordValue(event.target.value);

  const handleSubmit = () => {
    const userInformation = {
      id: identityValue,
      password: passwordValue
    };

    postSignIn(userInformation);
  };

  return (
    <FlexBox
      wrap="wrap"
      column="column"
      align="center"
      justify="center"
      maxHeight
      createWrapper
    >
      <LoadingSpinner loadingState={loadingState.signIn}>
        <Logo size="large" spin />
        <SignInForm
          handleSubmit={handleSubmit}
          identityValue={identityValue}
          handleIdentityValue={handleIdentityValue}
          passwordValue={passwordValue}
          handlePasswordVaule={handlePasswordValue}
          signupUrl="/signup"
        />
      </LoadingSpinner>
    </FlexBox>
  );
};

SignIn.propTypes = {
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
