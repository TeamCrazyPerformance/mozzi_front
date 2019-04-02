import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlexBox from './../../components/LayoutComponents/FlexBox/FlexBox';
import SignInForm from './../../components/SignInForm/SignInForm';
import Logo from './../../components/Logo/Logo';

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

  // To get previous props or state.
  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current
  };

  const prevIsSignIn = usePrevious(isSignIn);

  useEffect(() => {
    console.log(prevIsSignIn);
  });



  const _checkIsSignIn = () => {
    if(isSignIn) {
      return <Redirect to="/main" />
    }
  };




  // state = {
  //   redirectToReferrer: false
  // };

  // componentWillReceiveProps(nextProps) {
  //   if (
  //     isSignIn !== nextProps.isSignIn &&
  //     nextProps.isSignIn === true
  //   ) {
  //     this.setState({ redirectToReferrer: true });
  //   }
  // };

  // if (redirectToReferrer) {
  //   return <Redirect to={from} />;
  // }

  


  return (
    <>
      {_checkIsSignIn()}
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
      sigIn: auth.loadingState.sigIn
    }
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(SignIn);