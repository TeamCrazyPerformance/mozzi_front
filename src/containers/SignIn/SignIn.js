import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlexBox from './../../components/LayoutComponents/FlexBox/FlexBox';
import SignInForm from './../../components/SignInForm/SignInForm';
import Logo from './../../components/Logo/Logo';

import * as authActions from '../../redux/auth/actions';

const SignIn = (props) => {
  const [identityValue, setIdentityValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // Handle input value.
  const _handleIdentityValue = event => setIdentityValue(event.target.value);
  // Handle input value.
  const _handlePasswordValue = event => setPasswordValue(event.target.value);

  const _handleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    const { postSignIn } = props;
    // Create user information object.
    const userInformation = {
      identity: identityValue,
      password: passwordValue
    };

    // Post sign in action.
    postSignIn({ userInformation });
  };

  return (
    <FlexBox
      wrap= "wrap"
      column= "column"
      align= "center"
      justify= "center"
    >
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
    </FlexBox>
  );
};

// Check prop types.
SignIn.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
  loadingState: PropTypes.objectOf(PropTypes.bool),
};

// Map state to props.
const _mapStateToProps = (state) => {
  const auth = state.Auth;
  return {
    isSignIn: auth.isSignIn,
    loadingState: {
      sigIn: auth.loadingState.sigIn
    }
  };
};

// Map dispatch to props.
const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch);
};

// Connect state and dispatch to SignIn props.
export default connect(_mapStateToProps, _mapDispatchToProps)(SignIn);