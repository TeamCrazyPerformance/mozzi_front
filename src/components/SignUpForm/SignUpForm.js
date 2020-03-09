import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./SignUpForm.css";

import IdentityValueInputBox from "../InputBoxes/IdentityValueInputBox/IdentityValueInputBox";
import PasswordValueInputBox from "../InputBoxes/PasswordValueInputBox/PasswordValueInputBox";
import PasswordConfirmValueInputBox from "../InputBoxes/PasswordConfirmValueInputBox/PasswordConfirmValueInputBox";
import NameValueInputBox from "../InputBoxes/NameValueInputBox/NameValueInputBox";
import BirthdayValueInputBox from "../InputBoxes/BirthdayValueInputBox/BirthdayValueInputBox";
import NickNameValueInputBox from "../InputBoxes/NickNameValueInputBox/NickNameValueInputBox";
import SchoolValueInputBox from "../InputBoxes/SchoolValueInputBox/SchoolValueInputBox";
import StudentNumberValueInputBox from "../InputBoxes/StudentNumberValueInputBox/StudentNumberValueInputBox";
import MajorValueInputBox from "../InputBoxes/MajorValueInputBox/MajorValueInputBox";
import EmailValueInputBox from "../InputBoxes/EmailValueInputBox/EmailValueInputBox";
import PhoneNumberValueInputBox from "../InputBoxes/PhoneNumberValueInputBox/PhoneNumberValueInputBox";

const signUpFormStyles = makeStyles(() => ({
  signUpFormWrapperClassName: {
    width: "30vw",
    marginBottom: "20px"
  }
}));

const SignUpForm = props => {
  const { signupFormData, handleSubmit } = props;
  const { signUpFormWrapperClassName } = signUpFormStyles();

  const validationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className={`signup-form-component ${signUpFormWrapperClassName}`}>
      <form
        className="signup-form-component__form"
        onSubmit={validationCheckAndHandleSubmit}
      >
        <IdentityValueInputBox
          value={signupFormData.identity.value}
          setValue={signupFormData.identity.setValue}
          valueErrMessage={signupFormData.identity.valueErrMessage}
          setValueErrMessage={signupFormData.identity.setValueErrMessage}
          identityValueDuplicateCheck={
            signupFormData.identity.identityValueDuplicateCheck
          }
        />
        <PasswordValueInputBox
          value={signupFormData.password.value}
          setValue={signupFormData.password.setValue}
          valueErrMessage={signupFormData.password.valueErrMessage}
          setValueErrMessage={signupFormData.password.setValueErrMessage}
          passwordConfirmValue={signupFormData.password.passwordConfirmValue}
          setPasswordConfirmValueErrMessage={
            signupFormData.password.setPasswordConfirmValueErrMessage
          }
        />
        <PasswordConfirmValueInputBox
          value={signupFormData.passwordConfirm.value}
          setValue={signupFormData.passwordConfirm.setValue}
          valueErrMessage={signupFormData.passwordConfirm.valueErrMessage}
          setValueErrMessage={signupFormData.passwordConfirm.setValueErrMessage}
          passwordValue={signupFormData.passwordConfirm.passwordValue}
        />
        <NameValueInputBox
          value={signupFormData.name.value}
          setValue={signupFormData.name.setValue}
          valueErrMessage={signupFormData.name.valueErrMessage}
          setValueErrMessage={signupFormData.name.setValueErrMessage}
        />
        <BirthdayValueInputBox
          value={signupFormData.birthday.value}
          setValue={signupFormData.birthday.setValue}
          valueErrMessage={signupFormData.birthday.valueErrMessage}
          setValueErrMessage={signupFormData.birthday.setValueErrMessage}
        />
        <NickNameValueInputBox
          value={signupFormData.nickNmae.value}
          setValue={signupFormData.nickNmae.setValue}
          valueErrMessage={signupFormData.nickNmae.valueErrMessage}
          setValueErrMessage={signupFormData.nickNmae.setValueErrMessage}
        />
        <SchoolValueInputBox
          value={signupFormData.school.value}
          setValue={signupFormData.school.setValue}
          valueErrMessage={signupFormData.school.valueErrMessage}
          setValueErrMessage={signupFormData.school.setValueErrMessage}
        />
        <StudentNumberValueInputBox
          value={signupFormData.studentNumber.value}
          setValue={signupFormData.studentNumber.setValue}
          valueErrMessage={signupFormData.studentNumber.valueErrMessage}
          setValueErrMessage={signupFormData.studentNumber.setValueErrMessage}
        />
        <MajorValueInputBox
          value={signupFormData.major.value}
          setValue={signupFormData.major.setValue}
          valueErrMessage={signupFormData.major.valueErrMessage}
          setValueErrMessage={signupFormData.major.setValueErrMessage}
        />
        <EmailValueInputBox
          value={signupFormData.email.value}
          setValue={signupFormData.email.setValue}
          valueErrMessage={signupFormData.email.valueErrMessage}
          setValueErrMessage={signupFormData.email.setValueErrMessage}
        />
        <PhoneNumberValueInputBox
          value={signupFormData.phoneNumber.value}
          setValue={signupFormData.phoneNumber.setValue}
          valueErrMessage={signupFormData.phoneNumber.valueErrMessage}
          setValueErrMessage={signupFormData.phoneNumber.setValueErrMessage}
        />

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
  signupFormData: PropTypes.shape({
    identity: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired,
      identityValueDuplicateCheck: PropTypes.func.isRequired
    }),
    password: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired,
      passwordConfirmValue: PropTypes.string.isRequired,
      setPasswordConfirmValueErrMessage: PropTypes.func.isRequired
    }),
    passwordConfirm: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired,
      passwordValue: PropTypes.string.isRequired
    }),
    name: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    birthday: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    nickNmae: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    school: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    studentNumber: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    major: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    email: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    phoneNumber: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    })
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignUpForm;
