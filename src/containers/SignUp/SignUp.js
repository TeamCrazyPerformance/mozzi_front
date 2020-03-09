import React, { useState } from "react";
import PropTypes from "prop-types";
import FlexBox from "../../components/FlexBox/FlexBox";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "../../components/Logo/Logo";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import * as signUpApi from "./SignUpApi";

const SignUp = props => {
  const { history } = props;

  const [identityValue, setIdentityValue] = useState("");
  const [identityValueErrMessage, setIdentityValueErrMessage] = useState("");

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValueErrMessage, setPasswordValueErrMessage] = useState("");

  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
  const [
    passwordConfirmValueErrMessage,
    setPasswordConfirmValueErrMessage
  ] = useState("");

  const [nameValue, setNameValue] = useState("");
  const [nameValueErrMessage, setNameValueErrMessage] = useState("");

  const [birthdayValue, setBirthdayValue] = useState("");
  const [birthdayValueErrMessage, setBirthdayValueErrMessage] = useState("");

  const [nickNameValue, setNickNameValue] = useState("");
  const [nickNameValueErrMessage, setNickNameValueErrMessage] = useState("");

  const [schoolValue, setSchoolValue] = useState("");
  const [schoolValueErrMessage, setSchoolValueErrMessage] = useState("");

  const [stdNumValue, setStdNumValue] = useState("");
  const [stdNumValueErrMessage, setStdNumValueErrMessage] = useState("");

  const [majorValue, setMajorValue] = useState("");
  const [majorValueErrMessage, setMajorValueErrMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [emailValueErrMessage, setEmailValueErrMessage] = useState("");

  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [phoneNumValueErrMessage, setPhoneNumValueErrMessage] = useState("");

  const signupFormData = {
    identity: {
      value: identityValue,
      setValue: setIdentityValue,
      valueErrMessage: identityValueErrMessage,
      setValueErrMessage: setIdentityValueErrMessage,
      identityValueDuplicateCheck: signUpApi.putIdCheck
    },
    password: {
      value: passwordValue,
      setValue: setPasswordValue,
      valueErrMessage: passwordValueErrMessage,
      setValueErrMessage: setPasswordValueErrMessage,
      passwordConfirmValue,
      setPasswordConfirmValueErrMessage
    },
    passwordConfirm: {
      value: passwordConfirmValue,
      setValue: setPasswordConfirmValue,
      valueErrMessage: passwordConfirmValueErrMessage,
      setValueErrMessage: setPasswordConfirmValueErrMessage,
      passwordValue
    },
    name: {
      value: nameValue,
      setValue: setNameValue,
      valueErrMessage: nameValueErrMessage,
      setValueErrMessage: setNameValueErrMessage
    },
    birthday: {
      value: birthdayValue,
      setValue: setBirthdayValue,
      valueErrMessage: birthdayValueErrMessage,
      setValueErrMessage: setBirthdayValueErrMessage
    },
    nickNmae: {
      value: nickNameValue,
      setValue: setNickNameValue,
      valueErrMessage: nickNameValueErrMessage,
      setValueErrMessage: setNickNameValueErrMessage
    },
    school: {
      value: schoolValue,
      setValue: setSchoolValue,
      valueErrMessage: schoolValueErrMessage,
      setValueErrMessage: setSchoolValueErrMessage
    },
    studentNumber: {
      value: stdNumValue,
      setValue: setStdNumValue,
      valueErrMessage: stdNumValueErrMessage,
      setValueErrMessage: setStdNumValueErrMessage
    },
    major: {
      value: majorValue,
      setValue: setMajorValue,
      valueErrMessage: majorValueErrMessage,
      setValueErrMessage: setMajorValueErrMessage
    },
    email: {
      value: emailValue,
      setValue: setEmailValue,
      valueErrMessage: emailValueErrMessage,
      setValueErrMessage: setEmailValueErrMessage
    },
    phoneNumber: {
      value: phoneNumValue,
      setValue: setPhoneNumValue,
      valueErrMessage: phoneNumValueErrMessage,
      setValueErrMessage: setPhoneNumValueErrMessage
    }
  };

  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = () => {
    setLoadingState(false);
    setError(false);
    history.push("/signin");
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const handleSubmit = () => {
    let err = false;

    Object.keys(signupFormData).forEach(key => {
      if (
        signupFormData[key].value === "" ||
        signupFormData[key].valueErrMessage
      )
        err = true;
    });

    if (!err) {
      signUpApi.postSignUp({
        userInformation: {
          id: identityValue,
          password: passwordValue,
          name: nameValue,
          birthday: birthdayValue,
          nickName: nickNameValue,
          school: schoolValue,
          studentNumber: stdNumValue,
          major: majorValue,
          email: emailValue,
          phoneNumber: phoneNumValue
        },
        apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
        apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
        apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
      });
    }
  };

  return (
    <FlexBox wrap="wrap" column="column" align="center" maxHeight createWrapper>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <>
            <Logo />
            <SignUpForm
              signupFormData={signupFormData}
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
