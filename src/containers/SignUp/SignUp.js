import React, { useState } from "react";
import FlexBox from "../../components/FlexBox/FlexBox";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "../../components/Logo/Logo";

const SignUp = () => {
  const [identityValue, setIdentityValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [birthdayValue, setBirthdayValue] = useState("");
  const [nickNameValue, setNickNameValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [schoolValue, setSchoolValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");

  const handleIdentityValue = event => setIdentityValue(event.target.value);
  const handlePasswordValue = event => setPasswordValue(event.target.value);
  const handlePasswordConfirmValue = event =>
    setPasswordConfirmValue(event.target.value);
  const handleNameValue = event => setNameValue(event.target.value);
  const handleBirthdayValue = event => setBirthdayValue(event.target.value);
  const handleNickNameValue = event => setNickNameValue(event.target.value);
  const handleGenderValue = event => setGenderValue(event.target.value);
  const handleSchoolValue = event => setSchoolValue(event.target.value);
  const handleEmailValue = event => setEmailValue(event.target.value);
  const handlePhoneNumberValue = event =>
    setPhoneNumberValue(event.target.value);

  return (
    <FlexBox
      wrap="wrap"
      column="column"
      align="center"
      justify="center"
      maxHeight
      createWrapper
    >
      <Logo />
      <SignUpForm />
    </FlexBox>
  );
};

export default SignUp;
