import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlexBox from '../../components/FlexBox/FlexBox';
import SignInForm from '../../components/SignInForm/SignInForm';
import Logo from '../../components/Logo/Logo';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import * as authActions from '../../redux/auth/actions';

const SignIn = (props) => {
  const { isSignIn, loadingState } = props;
  const [identityValue, setIdentityValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleIdentityValue = (event) => setIdentityValue(event.target.value);
  const handlePasswordValue = (event) => setPasswordValue(event.target.value);

  const handleSubmit = (event) => {
    // Prevent browers refresh.
    event.preventDefault();

    const { postSignIn } = props;
    const userInformation = {
      identity: identityValue,
      password: passwordValue,
    };

    postSignIn({ userInformation });
  };

  // When client sign in successed or try to access the SignIn page after signin.
  const checkSignIn = () => (isSignIn
    ? <Redirect to="/main" />
    : <></>);

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
          <Logo
            size="large"
            spin
          />
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
  loadingState: PropTypes.objectOf(PropTypes.bool),
};

const _mapStateToProps = (state) => {
  const { auth } = state;
  return {
    isSignIn: auth.isSignIn,
    loadingState: {
      signIn: auth.loadingState.signIn,
    },
  };
};

const _mapDispatchToProps = (dispatch) => bindActionCreators(authActions, dispatch);

export default connect(_mapStateToProps, _mapDispatchToProps)(SignIn);
