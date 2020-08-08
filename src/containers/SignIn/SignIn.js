import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FlexBox from "../../components/FlexBox/FlexBox";
import SignInForm from "../../components/SignInForm/SignInForm";
import Logo from "../../components/Logo/Logo";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import * as authActions from "../../redux/auth/actions";

const SignIn = (props) => {
  const { loadingState, postSignIn, idPasswordError } = props;
  const [identityValue, setIdentityValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleIdentityValue = (event) => setIdentityValue(event.target.value);
  const handlePasswordValue = (event) => setPasswordValue(event.target.value);

  const handleSubmit = () => {
    const userInformation = {
      id: identityValue,
      password: passwordValue,
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
      <LoadingSpinner loadingState={loadingState}>
        <Logo size="large" spin />
        <SignInForm
          handleSubmit={handleSubmit}
          identityValue={identityValue}
          handleIdentityValue={handleIdentityValue}
          passwordValue={passwordValue}
          idPasswordError={idPasswordError}
          handlePasswordVaule={handlePasswordValue}
          signupUrl="/signup"
        />
      </LoadingSpinner>
    </FlexBox>
  );
};

SignIn.propTypes = {
  postSignIn: PropTypes.func.isRequired,
  loadingState: PropTypes.bool.isRequired,
  idPasswordError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    isSignIn: auth.isSignIn,
    loadingState: auth.loadingState,
    idPasswordError: auth.idPasswordError,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
