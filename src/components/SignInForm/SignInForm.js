import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './SignInForm.css';

const SignInForm = ({
  handleSubmit, handleIdentityValue, handlePasswordVaule, signupUrl = '',
}) => (
  <div className="signin-form-component">
    <form
      className="signin-form-component__form"
      onSubmit={handleSubmit || undefined}
    >
      <div className="signin-form-component__form__input-box-wrapper">
        <TextField
          className="signin-form-component__form__input-box-wrapper__email-input-box"
          label="Email"
          type="email"
          autoComplete="email"
          onChange={handleIdentityValue || undefined}
          fullWidth
          required
        />
      </div>

      <div className="signin-form-component__form__input-box-wrapper">
        <TextField
          className="signin-form-component__form__input-box-wrapper__password-input-box"
          label="Password"
          type="password"
          onChange={handlePasswordVaule || undefined}
          fullWidth
          required
        />
      </div>

      <div className="signin-form-component__form__button-box-wrapper">
        <div className="signin-form-component__form__button-box-wrapper__button-wrapper">
          <Button
            className="signin-form-component__form__button-box-wrapper__button-wrapper__signup-button"
            color="primary"
            href={signupUrl || ''}
          >
              Sign-up in tcp
          </Button>
        </div>

        <div className="signin-form-component__form__button-box-wrapper__button-wrapper">
          <Button
            className="signin-form-component__form__button-box-wrapper__button-wrapper__signin-button"
            variant="contained"
            color="primary"
            type="submit"
          >
              Sign-in
          </Button>
        </div>
      </div>
    </form>
  </div>
);

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleIdentityValue: PropTypes.func.isRequired,
  handlePasswordVaule: PropTypes.func.isRequired,
  signupUrl: PropTypes.string.isRequired,
};

export default SignInForm;
