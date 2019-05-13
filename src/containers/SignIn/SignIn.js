import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlexBox from './../../components/FlexBox/FlexBox';
import SignInForm from './../../components/SignInForm/SignInForm';
import Logo from './../../components/Logo/Logo';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';

import * as authActions from '../../redux/auth/actions';

<<<<<<< HEAD
const SignIn = props => {
  const { isSignIn, loadingState } = props;
  const [identityValue, setIdentityValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleIdentityValue = event => setIdentityValue(event.target.value);
  const handlePasswordValue = event => setPasswordValue(event.target.value);

  const handleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    const { postSignIn } = props;
=======
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
>>>>>>> Kwoo_dev
    const userInformation = {
      identity: this.state.identityValue,
      password: this.state.passwordValue
    };

    postSignIn({ userInformation });
  };

<<<<<<< HEAD
  // When client sign in successed or try to access the SignIn page after signin.
  const checkSignIn = () => isSignIn
    ? <Redirect to="/main" />
    : <></>;

  return (
    <>
      {checkSignIn()}
      <FlexBox
        wrap="wrap"
        column="column"
        align="center"
        justify="center"
        maxHeight={true}
      >
        <LoadingSpinner loadingState={loadingState.signIn}>
          <Logo
            size="large"
            spin={true}
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
=======
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
>>>>>>> Kwoo_dev
};

SignIn.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
  loadingState: PropTypes.objectOf(PropTypes.bool),
};

const _mapStateToProps = (state) => {
  const auth = state.auth;
  return {
    isSignIn: auth.isSignIn,
    loadingState: {
<<<<<<< HEAD
      signIn: auth.loadingState.signIn
=======
      sigIn: auth.loadingState.sigIn,
      signOut: auth.loadingState.signOut
>>>>>>> Kwoo_dev
    }
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(SignIn);