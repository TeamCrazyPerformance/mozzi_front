import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./SignUpForm.css";

const SignUpForm = props => {
  const {
    identityValue,
    handleIdentityValue,
    passwordValue,
    handlePasswordValue,
    passwordConfirmValue,
    handlePasswordConfirmValue,
    nameValue,
    handleNameValue,
    birthdayValue,
    handleBirthdayValue,
    nickNameValue,
    handleNickNameValue,
    genderValue,
    handleGenderValue,
    schoolValue,
    handleSchoolValue,
    emailValue,
    handleEmailValue,
    phoneNumberValue,
    handlePhoneNumberValue,
    handleSubmit
  } = props;

  const vaildationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className="signup-form-component">
      <form
        className="signup-form-component__form"
        onSubmit={vaildationCheckAndHandleSubmit}
      >
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__id-input-box"
            label="ID"
            onChange={handleIdentityValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__password-input-box"
            label="Password"
            type="password"
            onChange={handlePasswordValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__password-confirm-input-box"
            label="Password confirm"
            type="password"
            onChange={handlePasswordConfirmValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__name-input-box"
            label="Name"
            onChange={handleNameValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__birthday-input-box"
            label="Birthday"
            onChange={handleBirthdayValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__nickname-input-box"
            label="Nickname"
            onChange={handleNickNameValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__gender-input-box"
            label="Gender"
            onChange={handleGenderValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__school-input-box"
            label="School"
            onChange={handleSchoolValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__email-input-box"
            label="Email"
            onChange={handleEmailValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__phoneNumber-input-box"
            label="Phone number"
            onChange={handlePhoneNumberValue}
            error={false}
            helperText=" "
            fullWidth
          />
        </div>

        <div className="signup-form-component__formr__button-wrapper">
          <Button
            className="signin-form-component__form__button-wrapper__signup-button"
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Sign-up
          </Button>
        </div>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  identityValue: PropTypes.string.isRequired,
  handleIdentityValue: PropTypes.func.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handlePasswordValue: PropTypes.func.isRequired,
  passwordConfirmValue: PropTypes.string.isRequired,
  handlePasswordConfirmValue: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  handleNameValue: PropTypes.func.isRequired,
  birthdayValue: PropTypes.string.isRequired,
  handleBirthdayValue: PropTypes.func.isRequired,
  nickNameValue: PropTypes.string.isRequired,
  handleNickNameValue: PropTypes.func.isRequired,
  genderValue: PropTypes.string.isRequired,
  handleGenderValue: PropTypes.func.isRequired,
  schoolValue: PropTypes.string.isRequired,
  handleSchoolValue: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  handleEmailValue: PropTypes.func.isRequired,
  phoneNumberValue: PropTypes.string.isRequired,
  handlePhoneNumberValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
