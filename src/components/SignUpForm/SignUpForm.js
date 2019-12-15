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

  const [identityValueIsEmpty, setIdentityValueIsEmpty] = useState(false);
  const [passwordValueIsEmpty, setPasswordValueIsEmpty] = useState(false);
  const [
    passwordConfirmValueIsEmpty,
    setPasswordConfirmValueIsEmpty
  ] = useState(false);
  const [passwordConfirmIsSame, setPasswordConfirmIsSame] = useState(true);
  const [nameValueIsEmpty, setNameValueIsEmpty] = useState(false);
  const [birthdayValueIsEmpty, setBirthdayValueIsEmpty] = useState(false);
  const [nickNameValueIsEmpty, setNickNameValueIsEmpty] = useState(false);
  const [genderValueIsEmpty, setGenderValueIsEmpty] = useState(false);
  const [schoolValueIsEmpty, setSchoolValueIsEmpty] = useState(false);
  const [emailValueIsEmpty, setEmailValueIsEmpty] = useState(false);
  const [phoneNumberValueIsEmpty, setPhoneNumberValueIsEmpty] = useState(false);

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

    if (passwordConfirmValue === "") {
      setPasswordConfirmValueIsEmpty(true);
      valueIsEmpty = true;
    } else setPasswordConfirmValueIsEmpty(false);

    if (nameValue === "") {
      setNameValueIsEmpty(true);
      valueIsEmpty = true;
    } else setNameValueIsEmpty(false);

    if (birthdayValue === "") {
      setBirthdayValueIsEmpty(true);
      valueIsEmpty = true;
    } else setBirthdayValueIsEmpty(false);

    if (nickNameValue === "") {
      setNickNameValueIsEmpty(true);
      valueIsEmpty = true;
    } else setNickNameValueIsEmpty(false);

    if (genderValue === "") {
      setGenderValueIsEmpty(true);
      valueIsEmpty = true;
    } else setGenderValueIsEmpty(false);

    if (schoolValue === "") {
      setSchoolValueIsEmpty(true);
      valueIsEmpty = true;
    } else setSchoolValueIsEmpty(false);

    if (emailValue === "") {
      setEmailValueIsEmpty(true);
      valueIsEmpty = true;
    } else setEmailValueIsEmpty(false);

    if (phoneNumberValue === "") {
      setPhoneNumberValueIsEmpty(true);
      valueIsEmpty = true;
    } else setPhoneNumberValueIsEmpty(false);

    return !valueIsEmpty;
  };

  const passwordConfirmCheck = () => {
    if (passwordValue === passwordConfirmValue) {
      setPasswordConfirmIsSame(true);
      return true;
    }

    setPasswordConfirmIsSame(false);
    return false;
  };

  const vaildationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    const emptyValidation = validationCheck();
    const passwordConfirmValidation = passwordConfirmCheck();
    if (emptyValidation && passwordConfirmValidation) handleSubmit();
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
            error={identityValueIsEmpty}
            helperText={identityValueIsEmpty ? "Please fill ID" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__password-input-box"
            label="Password"
            type="password"
            onChange={handlePasswordValue}
            error={passwordValueIsEmpty}
            helperText={passwordValueIsEmpty ? "Please fill password" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__password-confirm-input-box"
            label="Password confirm"
            type="password"
            onChange={handlePasswordConfirmValue}
            error={passwordConfirmValueIsEmpty || !passwordConfirmIsSame}
            helperText={
              passwordConfirmValueIsEmpty || !passwordConfirmIsSame
                ? "Please check password confirm"
                : " "
            }
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__name-input-box"
            label="Name"
            onChange={handleNameValue}
            error={nameValueIsEmpty}
            helperText={nameValueIsEmpty ? "Please fill name" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__birthday-input-box"
            label="Birthday"
            onChange={handleBirthdayValue}
            error={birthdayValueIsEmpty}
            helperText={birthdayValueIsEmpty ? "Please fill birthday" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__nickname-input-box"
            label="Nickname"
            onChange={handleNickNameValue}
            error={nickNameValueIsEmpty}
            helperText={nickNameValueIsEmpty ? "Please fill nick name" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__gender-input-box"
            label="Gender"
            onChange={handleGenderValue}
            error={genderValueIsEmpty}
            helperText={genderValueIsEmpty ? "Please fill gender" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__school-input-box"
            label="School"
            onChange={handleSchoolValue}
            error={schoolValueIsEmpty}
            helperText={schoolValueIsEmpty ? "Please fill school" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__email-input-box"
            label="Email"
            onChange={handleEmailValue}
            error={emailValueIsEmpty}
            helperText={emailValueIsEmpty ? "Please fill email" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__phoneNumber-input-box"
            label="Phone number"
            onChange={handlePhoneNumberValue}
            error={phoneNumberValueIsEmpty}
            helperText={
              phoneNumberValueIsEmpty ? "Please fill phone number" : " "
            }
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
