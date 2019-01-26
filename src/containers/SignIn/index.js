import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/Input';

import * as authActions from './../../redux/auth/actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identityValue: '',
      passwordValue: ''
    }
  };

  handleIdentityValue = (event) => {
    // Handle input value.
    this.setState({
      ...this.state,
      identityValue: event.target.value
    });
  };

  handlePasswordValue = (event) => {
    // Handle input value.
    this.setState({
      ...this.state,
      passwordValue: event.target.value
    });
  };

  handleSubmit = (event) => {
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
      <div className="signin-component">
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              className="signin-component__email-input-box"
              label="Email"
              type="email"
              onChange={this.handleIdentityValue}
              autoComplete="email"
              placeholder="email"
              required
            />
          </div>
          <div>
            <TextField
              className="signin-component__password-input-box"
              label="Password"
              type="password"
              placeholder="password"
              onChange={this.handlePasswordValue}
              required
            />
          </div>
          <div>
            <Button
              className="signin-component__signin-button"
              variant="contained"
              color="primary"
              type="submit"
            >
              Sign-in
            </Button>
          </div>
        </form>
      </div>
    );
  };
};

// Map state to props.
const mapStateToProps = (state) => {
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
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch);
};

// Connect state and dispatch to SignIn props.
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);