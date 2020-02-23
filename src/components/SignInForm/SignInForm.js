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
    idPasswordError,
    signupUrl
  } = props;

  const [identityValueIsEmpty, setIdentityValueIsEmpty] = useState(false);
  const [passwordValueIsEmpty, setPasswordValueIsEmpty] = useState(false);

  const validationCheck = () => {
    let valueIsEmpty = false;

    if (identityValue === "") {
      setIdentityValueIsEmpty(true);
      valueIsEmpty = true;
    } else setIdentityValueIsEmpty(false);

    if (passwordValue === "") {
      setPasswordValueIsEmpty(true);
      valueIsEmpty = true;
    } else setPasswordValueIsEmpty(false);

    return !valueIsEmpty;
  };

  const validationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    if (validationCheck()) handleSubmit();
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
            value={identityValue}
            onChange={handleIdentityValue || undefined}
            error={identityValueIsEmpty || idPasswordError}
            helperText={(() => {
              if (idPasswordError) return "ID or password error";
              if (identityValueIsEmpty) return "Please fill ID";
              return " ";
            })()}
            fullWidth
          />
        </div>
        <div className="signin-form-component__form__input-box-wrapper">
          <TextField
            className="signin-form-component__form__input-box-wrapper__password-input-box"
            label="Password"
            type="password"
            value={passwordValue}
            onChange={handlePasswordVaule || undefined}
            error={passwordValueIsEmpty || idPasswordError}
            helperText={(() => {
              if (idPasswordError) return "ID or password error";
              if (passwordValueIsEmpty) return "Please fill password";
              return " ";
            })()}
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
  idPasswordError: PropTypes.bool.isRequired,
  signupUrl: PropTypes.string.isRequired
};

export default SignInForm;
