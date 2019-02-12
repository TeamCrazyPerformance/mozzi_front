import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlexBox from './../../components/LayoutComponents/FlexBox/FlexBox';
import SignInForm from './../../components/SignInForm/SignInForm';
import Logo from './../../components/Logo/Logo';

import * as authActions from '../../redux/auth/actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identityValue: '',
      passwordValue: ''
    }
  };

  _handleIdentityValue = (event) => {
    // Handle input value.
    this.setState({
      ...this.state,
      identityValue: event.target.value
    });
  };

  _handlePasswordValue = (event) => {
    // Handle input value.
    this.setState({
      ...this.state,
      passwordValue: event.target.value
    });
  };

  _handleSubmit = (event) => {
    // Prevent browers refresh.
    event.preventDefault();

    const { postSignIn } = this.props;
    const userInformation = {
      identity: this.state.identityValue,
      password: this.state.passwordValue
    };

    // Post sign in action.
    postSignIn({ userInformation });
  };

  render() {
    return(
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
          handleSubmit={this._handleSubmit}
          handleIdentityValue={this._handleIdentityValue}
          handlePasswordVaule={this._handlePasswordValue}
          signupUrl="/signup"
        />
      </FlexBox>
    );
  };
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
      sigIn: auth.loadingState.sigIn,
      signOut: auth.loadingState.signOut
    }
  };
};

// Map dispatch to props.
const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch);
};

// Connect state and dispatch to SignIn props.
export default connect(_mapStateToProps, _mapDispatchToProps)(SignIn);