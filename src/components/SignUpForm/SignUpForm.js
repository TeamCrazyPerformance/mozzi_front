import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./SignUpForm.css";

const signUpFormStyles = makeStyles(() => ({
  signUpFormWrapperClassName: {
    width: "30vw",
    marginBottom: "20px"
  }
}));

const SignUpForm = props => {
  const {
    identityValue,
    handleIdentityValue,
    identityValueUseable,
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
    schoolValue,
    handleSchoolValue,
    studentNumberValue,
    handleStudentNumberValue,
    majorValue,
    handleMajorValue,
    emailValue,
    handleEmailValue,
    phoneNumberValue,
    handlePhoneNumberValue,
    handleSubmit
  } = props;

  const { signUpFormWrapperClassName } = signUpFormStyles();

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
  const [schoolValueIsEmpty, setSchoolValueIsEmpty] = useState(false);
  const [studentNumberValueIsEmpty, setStudentNumberValueIsEmpty] = useState(
    false
  );
  const [majorValueIsEmpty, setMajorValueIsEmpty] = useState(false);
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

    if (schoolValue === "") {
      setSchoolValueIsEmpty(true);
      valueIsEmpty = true;
    } else setSchoolValueIsEmpty(false);

    if (studentNumberValue === "") {
      setStudentNumberValueIsEmpty(true);
      valueIsEmpty = true;
    } else setStudentNumberValueIsEmpty(false);

    if (majorValue === "") {
      setMajorValueIsEmpty(true);
      valueIsEmpty = true;
    } else setMajorValueIsEmpty(false);

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

  const validationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    const emptyValidation = validationCheck();
    const passwordConfirmValidation = passwordConfirmCheck();
    if (emptyValidation && passwordConfirmValidation && identityValueUseable)
      handleSubmit();
  };

  return (
    <div className={`signup-form-component ${signUpFormWrapperClassName}`}>
      <form
        className="signup-form-component__form"
        onSubmit={validationCheckAndHandleSubmit}
      >
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__id-input-box"
            label="ID"
            value={identityValue}
            onChange={handleIdentityValue}
            error={identityValueIsEmpty || !identityValueUseable}
            helperText={(() => {
              if (!identityValueUseable) return "This ID can't use";
              if (identityValueIsEmpty) return "Please fill password";
              return " ";
            })()}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__password-input-box"
            label="Password"
            type="password"
            value={passwordValue}
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
            value={passwordConfirmValue}
            onChange={handlePasswordConfirmValue}
            error={passwordConfirmValueIsEmpty || !passwordConfirmIsSame}
            helperText={(() => {
              if (passwordConfirmValueIsEmpty)
                return "Please fill password confirm";
              if (!passwordConfirmIsSame)
                return "Please check password confirm";
              return " ";
            })()}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__name-input-box"
            label="Name"
            value={nameValue}
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
            value={birthdayValue}
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
            value={nickNameValue}
            onChange={handleNickNameValue}
            error={nickNameValueIsEmpty}
            helperText={nickNameValueIsEmpty ? "Please fill nick name" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__school-input-box"
            label="School"
            value={schoolValue}
            onChange={handleSchoolValue}
            error={schoolValueIsEmpty}
            helperText={schoolValueIsEmpty ? "Please fill school" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__student-number-input-box"
            label="Student Number"
            value={studentNumberValue}
            onChange={handleStudentNumberValue}
            error={studentNumberValueIsEmpty}
            helperText={
              studentNumberValueIsEmpty ? "Please fill student number" : " "
            }
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__major-input-box"
            label="Major"
            value={majorValue}
            onChange={handleMajorValue}
            error={majorValueIsEmpty}
            helperText={majorValueIsEmpty ? "Please fill major" : " "}
            fullWidth
          />
        </div>
        <div className="signup-form-component__form__input-box-wrapper">
          <TextField
            className="signup-form-component__form__input-box-wrapper__email-input-box"
            label="Email"
            value={emailValue}
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
            value={phoneNumberValue}
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
  identityValueUseable: PropTypes.bool.isRequired,
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
  schoolValue: PropTypes.string.isRequired,
  handleSchoolValue: PropTypes.func.isRequired,
  studentNumberValue: PropTypes.string.isRequired,
  handleStudentNumberValue: PropTypes.func.isRequired,
  majorValue: PropTypes.string.isRequired,
  handleMajorValue: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  handleEmailValue: PropTypes.func.isRequired,
  phoneNumberValue: PropTypes.string.isRequired,
  handlePhoneNumberValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
