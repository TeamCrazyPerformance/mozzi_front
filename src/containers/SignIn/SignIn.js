import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlexBox from './../../components/FlexBox/FlexBox';
import SignInForm from './../../components/SignInForm/SignInForm';
import Logo from './../../components/Logo/Logo';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';

import * as authActions from '../../redux/auth/actions';

const SignIn = props => {
  const { isSignIn, loadingState } = props;
  const [identityValue, setIdentityValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const _handleIdentityValue = event => setIdentityValue(event.target.value);
  const _handlePasswordValue = event => setPasswordValue(event.target.value);

  const _handleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    const { postSignIn } = props;
    const userInformation = {
      identity: identityValue,
      password: passwordValue
    };

    postSignIn({ userInformation });
  };

  const _checkIsSignIn = () => {
    if(isSignIn) {
      return <Redirect to="/main" />
    }
  };

  return (
    <>
      {_checkIsSignIn()}
      <FlexBox
        wrap= "wrap"
        column= "column"
        align= "center"
        justify= "center"
      >
        <LoadingSpinner loadingState={loadingState.signIn}>
          <Logo
            size="large"
            spin={true}
          />
          <SignInForm
            handleSubmit={_handleSubmit}
            handleIdentityValue={_handleIdentityValue}
            handlePasswordVaule={_handlePasswordValue}
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
  const auth = state.Auth;
  return {
    isSignIn: auth.isSignIn,
    loadingState: {
      signIn: auth.loadingState.signIn
    }
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(SignIn);