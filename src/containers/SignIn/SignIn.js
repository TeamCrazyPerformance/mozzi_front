import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/Input';

import FlexBox from './../../components/LayoutComponents/FlexBox/FlexBox';
import Box from './../../components/LayoutComponents/Box/Box';

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
        wrap="wrap"
        column="column"
        align="center"
        justify="center"
      >
        <Box>
          <form onSubmit={this._handleSubmit}>
            <TextField
              className="signin-component__email-input-box"
              label="Email"
              type="email"
              onChange={this._handleIdentityValue}
              autoComplete="email"
              placeholder="email"
              required
            />
            <TextField
              className="signin-component__password-input-box"
              label="Password"
              type="password"
              placeholder="password"
              onChange={this._handlePasswordValue}
              required
            />
            <Button
              className="signin-component__signin-button"
              variant="contained"
              color="primary"
              type="submit"
            >
              Sign-in
            </Button>
          </form>
        </Box>
      </FlexBox>
    );
  };
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