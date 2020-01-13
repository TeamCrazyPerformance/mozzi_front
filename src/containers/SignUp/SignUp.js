import React, { useState } from "react";
import PropTypes from "prop-types";
import FlexBox from "../../components/FlexBox/FlexBox";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "../../components/Logo/Logo";
import Error from "../../components/Error/Error";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import * as signUpApi from "./SignUpApi";

const SignUp = props => {
  const { history } = props;

  const [identityValue, setIdentityValue] = useState("");
  const [identityValueUseable, setIdentityValueUseable] = useState(true);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [birthdayValue, setBirthdayValue] = useState("");
  const [nickNameValue, setNickNameValue] = useState("");
  const [schoolValue, setSchoolValue] = useState("");
  const [studentNumberValue, setStudentNumberValue] = useState("");
  const [majorValue, setMajorValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  const handleIdentityValue = event => {
    signUpApi
      .putIdCheck(event.target.value)
      .then(setIdentityValueUseable(true))
      .catch(() => setIdentityValueUseable(false));
    setIdentityValue(event.target.value);
  };
  const handlePasswordValue = event => setPasswordValue(event.target.value);
  const handlePasswordConfirmValue = event =>
    setPasswordConfirmValue(event.target.value);
  const handleNameValue = event => setNameValue(event.target.value);
  const handleBirthdayValue = event => setBirthdayValue(event.target.value);
  const handleNickNameValue = event => setNickNameValue(event.target.value);
  const handleSchoolValue = event => setSchoolValue(event.target.value);
  const handleStudentNumberValue = event =>
    setStudentNumberValue(event.target.value);
  const handleMajorValue = event => setMajorValue(event.target.value);
  const handleEmailValue = event => setEmailValue(event.target.value);
  const handlePhoneNumberValue = event =>
    setPhoneNumberValue(event.target.value);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateToTrue = () => setLoadingState(true);
  const setLoadingStateToFalse = () => setLoadingState(false);
  const setErrorToTrue = () => setError(true);
  const setErrorToFalse = () => setError(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingStateToTrue();
    setErrorToFalse();
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = () => {
    setLoadingStateToFalse();
    setErrorToFalse();
    history.push("/signin");
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingStateToFalse();
    setErrorToTrue();
  };

  const handleSubmit = () => {
    signUpApi.postSignUp({
      id: identityValue,
      password: passwordValue,
      name: nameValue,
      birthday: birthdayValue,
      nickName: nickNameValue,
      school: schoolValue,
      studentNumber: studentNumberValue,
      major: majorValue,
      email: emailValue,
      phoneNumber: phoneNumberValue,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  return (
    <FlexBox wrap="wrap" column="column" align="center" maxHeight createWrapper>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <Error />
        ) : (
          <>
            <Logo />
            <SignUpForm
              identityValue={identityValue}
              handleIdentityValue={handleIdentityValue}
              identityValueUseable={identityValueUseable}
              passwordValue={passwordValue}
              handlePasswordValue={handlePasswordValue}
              passwordConfirmValue={passwordConfirmValue}
              handlePasswordConfirmValue={handlePasswordConfirmValue}
              nameValue={nameValue}
              handleNameValue={handleNameValue}
              birthdayValue={birthdayValue}
              handleBirthdayValue={handleBirthdayValue}
              nickNameValue={nickNameValue}
              handleNickNameValue={handleNickNameValue}
              schoolValue={schoolValue}
              handleSchoolValue={handleSchoolValue}
              studentNumberValue={studentNumberValue}
              handleStudentNumberValue={handleStudentNumberValue}
              majorValue={majorValue}
              handleMajorValue={handleMajorValue}
              emailValue={emailValue}
              handleEmailValue={handleEmailValue}
              phoneNumberValue={phoneNumberValue}
              handlePhoneNumberValue={handlePhoneNumberValue}
              handleSubmit={handleSubmit}
            />
          </>
        )}
      </LoadingSpinner>
    </FlexBox>
  );
};

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default SignUp;
