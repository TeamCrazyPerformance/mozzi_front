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

  const handleSubmit = () => {
    const userInformation = {
      identity: identityValue,
      password: passwordValue,
      name: nameValue,
      birthday: birthdayValue,
      nickName: nickNameValue,
      gender: genderValue,
      school: schoolValue,
      email: emailValue,
      phoneNumber: phoneNumberValue
    };

    console.log(userInformation);
  };

  return (
    <FlexBox wrap="wrap" column="column" align="center" maxHeight createWrapper>
      <Logo />
      <SignUpForm
        identityValue={identityValue}
        handleIdentityValue={handleIdentityValue}
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
        genderValue={genderValue}
        handleGenderValue={handleGenderValue}
        schoolValue={schoolValue}
        handleSchoolValue={handleSchoolValue}
        emailValue={emailValue}
        handleEmailValue={handleEmailValue}
        phoneNumberValue={phoneNumberValue}
        handlePhoneNumberValue={handlePhoneNumberValue}
        handleSubmit={handleSubmit}
      />
    </FlexBox>
  );
};

export default SignUp;
