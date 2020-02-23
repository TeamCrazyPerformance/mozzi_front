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
  const [identityValueErrMessage, setIdentityValueErrMessage] = useState("");

  const identityValueCheck = async value => {
    const identityValueIsEmpty = value === "";
    if (identityValueIsEmpty) return "Please fill ID";

    const identityRegex = /^[A-Za-z0-9+]*$/.test(value);
    if (!identityRegex) return "Use only alphabets and numbers";

    const identityValueCanUse = await signUpApi.putIdCheck({
      identityValue: value
    });
    if (!identityValueCanUse) return "This ID can not use";

    return "";
  };

  const handleIdentityValue = async event => {
    setIdentityValue(event.target.value);
    setIdentityValueErrMessage(await identityValueCheck(event.target.value));
  };

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValueErrMessage, setPasswordValueErrMessage] = useState("");

  const passwordValueCheck = value => {
    const passwordValueIsEmpty = value === "";
    if (passwordValueIsEmpty) return "Please fill password";

    const passwordRegex = /^[A-Za-z0-9~!@#$%^&*()_+|<>?:{}+]*$/.test(value);
    if (!passwordRegex)
      return "Use only alphabets, numbers and special characters";

    return "";
  };

  const handlePasswordValue = event => {
    setPasswordValue(event.target.value);
    setPasswordValueErrMessage(passwordValueCheck(event.target.value));
  };

  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
  const [
    passwordConfirmValueErrMessage,
    setPasswordConfirmValueErrMessage
  ] = useState("");

  const passwordConfirmValueCheck = value => {
    const passwordConfirmValueIsEmpty = value === "";
    if (passwordConfirmValueIsEmpty) return "Please fill password confirm";

    const passwordConfirmValueIsSame = value === passwordValue;
    if (!passwordConfirmValueIsSame)
      return "Please check Password and Password confirm";

    return "";
  };

  const handlePasswordConfirmValue = event => {
    setPasswordConfirmValue(event.target.value);
    setPasswordConfirmValueErrMessage(
      passwordConfirmValueCheck(event.target.value)
    );
  };

  const [nameValue, setNameValue] = useState("");
  const [nameValueErrMessage, setNameValueErrMessage] = useState("");

  const nameValueCheck = value => {
    const nameValueIsEmpty = value === "";
    if (nameValueIsEmpty) return "Please fill name";

    const nameRegex = /^[가-힣a-zA-Z]*$/.test(value);
    if (!nameRegex) return "Use only alphabets and korean";

    return "";
  };
  const handleNameValue = event => {
    setNameValue(event.target.value);
    setNameValueErrMessage(nameValueCheck(event.target.value));
  };

  const [birthdayValue, setBirthdayValue] = useState("");
  const [birthdayValueErrMessage, setBirthdayValueErrMessage] = useState("");

  const birthdayValueCheck = value => {
    const birthdayValueIsEmpty = value === "";
    if (birthdayValueIsEmpty) return "Please fill birthday";

    const birthdayRegex = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(
      value
    );
    if (!birthdayRegex) return "Input YYMMDD format";

    return "";
  };
  const handleBirthdayValue = event => {
    setBirthdayValue(event.target.value);
    setBirthdayValueErrMessage(birthdayValueCheck(event.target.value));
  };

  const [nickNameValue, setNickNameValue] = useState("");
  const [nickNameValueErrMessage, setNickNameValueErrMessage] = useState("");

  const nickNameValueCheck = value => {
    const nickNameValueIsEmpty = value === "";
    if (nickNameValueIsEmpty) return "Please fill nick name";

    const nickNameRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9~!@#$%^&*()_+|<>?:{}+]*$/.test(
      value
    );
    if (!nickNameRegex)
      return "Use only korean, alphabets, numbers and special characters";

    return "";
  };
  const handleNickNameValue = event => {
    setNickNameValue(event.target.value);
    setNickNameValueErrMessage(nickNameValueCheck(event.target.value));
  };

  const [schoolValue, setSchoolValue] = useState("");
  const [schoolValueErrMessage, setSchoolValueErrMessage] = useState("");

  const schoolValueCheck = value => {
    const schoolValueIsEmpty = value === "";
    if (schoolValueIsEmpty) return "Please fill school";

    const schoolRegex = /^[가-힣+]*(대학교)$/.test(value);
    if (!schoolRegex) return "Input XX대학교 format";

    return "";
  };
  const handleSchoolValue = event => {
    setSchoolValue(event.target.value);
    setSchoolValueErrMessage(schoolValueCheck(event.target.value));
  };

  const [stdNumValue, setStdNumValue] = useState("");
  const [stdNumValueErrMessage, setStdNumValueErrMessage] = useState("");

  const stdNumValueCheck = value => {
    const stdNumValueIsEmpty = value === "";
    if (stdNumValueIsEmpty) return "Please fill student number";

    const stdNumRegex = /^[0-9]{8}$/.test(value);
    if (!stdNumRegex) return "Input correct student number";

    return "";
  };
  const handleStdNumValue = event => {
    setStdNumValue(event.target.value);
    setStdNumValueErrMessage(stdNumValueCheck(event.target.value));
  };

  const [majorValue, setMajorValue] = useState("");
  const [majorValueErrMessage, setMajorValueErrMessage] = useState("");

  const majorValueCheck = value => {
    const majorValueIsEmpty = value === "";
    if (majorValueIsEmpty) return "Please fill major";

    const majorRegex = /^[가-힣+]*(전공)$/.test(value);
    if (!majorRegex) return "Input XX전공 format";

    return "";
  };
  const handleMajorValue = event => {
    setMajorValue(event.target.value);
    setMajorValueErrMessage(majorValueCheck(event.target.value));
  };

  const [emailValue, setEmailValue] = useState("");
  const [emailValueErrMessage, setEmailValueErrMessage] = useState("");

  const emailValueCheck = value => {
    const emailValueIsEmpty = value === "";
    if (emailValueIsEmpty) return "Please fill email";

    const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
      value
    );
    if (!emailRegex) return "Input corret email format";

    return "";
  };
  const handleEmailValue = event => {
    setEmailValue(event.target.value);
    setEmailValueErrMessage(emailValueCheck(event.target.value));
  };

  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [phoneNumValueErrMessage, setPhoneNumValueErrMessage] = useState("");

  const phoneNumValueCheck = value => {
    const phoneNumValueIsEmpty = value === "";
    if (phoneNumValueIsEmpty) return "Please fill phone number";

    const phoneNumRegex = /^[0-9]{11}$/.test(value);
    if (!phoneNumRegex) return "Input phone number without hyphen";

    return "";
  };
  const handlePhoneNumValue = event => {
    setPhoneNumValue(event.target.value);
    setPhoneNumValueErrMessage(phoneNumValueCheck(event.target.value));
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

  const signupFormData = [
    {
      label: "ID",
      value: identityValue,
      valueErrMessage: identityValueErrMessage,
      handleValue: handleIdentityValue
    },
    {
      label: "Password",
      type: "password",
      value: passwordValue,
      valueErrMessage: passwordValueErrMessage,
      handleValue: handlePasswordValue
    },
    {
      label: "Password confirm",
      type: "password",
      value: passwordConfirmValue,
      valueErrMessage: passwordConfirmValueErrMessage,
      handleValue: handlePasswordConfirmValue
    },
    {
      label: "Name",
      value: nameValue,
      valueErrMessage: nameValueErrMessage,
      handleValue: handleNameValue
    },
    {
      label: "Birthday",
      value: birthdayValue,
      valueErrMessage: birthdayValueErrMessage,
      handleValue: handleBirthdayValue
    },
    {
      label: "Nickname",
      value: nickNameValue,
      valueErrMessage: nickNameValueErrMessage,
      handleValue: handleNickNameValue
    },
    {
      label: "School",
      value: schoolValue,
      valueErrMessage: schoolValueErrMessage,
      handleValue: handleSchoolValue
    },
    {
      label: "Student Number",
      value: stdNumValue,
      valueErrMessage: stdNumValueErrMessage,
      handleValue: handleStdNumValue
    },
    {
      label: "Major",
      value: majorValue,
      valueErrMessage: majorValueErrMessage,
      handleValue: handleMajorValue
    },
    {
      label: "Email",
      value: emailValue,
      valueErrMessage: emailValueErrMessage,
      handleValue: handleEmailValue
    },
    {
      label: "Phone number",
      value: phoneNumValue,
      valueErrMessage: phoneNumValueErrMessage,
      handleValue: handlePhoneNumValue
    }
  ];

  const handleSubmit = () => {
    let err = false;

    signupFormData.forEach(data => {
      if (data.value === "" || data.valueErrMessage) err = true;
    });

    if (!err) {
      signUpApi.postSignUp({
        id: identityValue,
        password: passwordValue,
        name: nameValue,
        birthday: birthdayValue,
        nickName: nickNameValue,
        school: schoolValue,
        studentNumber: stdNumValue,
        major: majorValue,
        email: emailValue,
        phoneNumber: phoneNumValue,
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
          <Error />
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
