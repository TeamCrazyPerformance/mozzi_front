import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./SignInForm.css";

const SignInForm = props => {
  const {
    handleSubmit,
    identityValue,
    handleIdentityValue,
    passwordValue,
    handlePasswordVaule,
    signupUrl
  } = props;

  const [identityValueIsEmpty, setIdentityValueIsEmpty] = useState(false);
  const [passwordValueIsEmpty, setPasswordValueIsEmpty] = useState(false);

  const validationCheck = (idValue, pwValue) => {
    if (idValue && pwValue) return true;
    return false;
  };

  const setTextFieldToError = () => {
    if (identityValue === "") setIdentityValueIsEmpty(true);
    else setIdentityValueIsEmpty(false);

    if (passwordValue === "") setPasswordValueIsEmpty(true);
    else setPasswordValueIsEmpty(false);
  };

  const validationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    if (validationCheck(identityValue, passwordValue)) {
      handleSubmit();
    } else {
      setTextFieldToError();
    }
  };

  return (
    <div className="signin-form-component">
      <form
        className="signin-form-component__form"
        onSubmit={validationCheckAndHandleSubmit}
      >
        <div className="signin-form-component__form__input-box-wrapper">
          <TextField
            className="signin-form-component__form__input-box-wrapper__email-input-box"
            label="Email"
            onChange={handleIdentityValue || undefined}
            error={identityValueIsEmpty}
            helperText={identityValueIsEmpty ? "Please fill Email" : " "}
            fullWidth
          />
        </div>
        <div className="signin-form-component__form__input-box-wrapper">
          <TextField
            className="signin-form-component__form__input-box-wrapper__password-input-box"
            label="Password"
            type="password"
            onChange={handlePasswordVaule || undefined}
            error={passwordValueIsEmpty}
            helperText={passwordValueIsEmpty ? "Please fill Password" : " "}
            fullWidth
          />
        </div>

        <div className="signin-form-component__form__button-box-wrapper">
          <div className="signin-form-component__form__button-box-wrapper__button-wrapper">
            <Button
              className="signin-form-component__form__button-box-wrapper__button-wrapper__signup-button"
              color="primary"
              href={signupUrl || ""}
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
};

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  identityValue: PropTypes.string.isRequired,
  handleIdentityValue: PropTypes.func.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handlePasswordVaule: PropTypes.func.isRequired,
  signupUrl: PropTypes.string.isRequired
};

export default SignInForm;
