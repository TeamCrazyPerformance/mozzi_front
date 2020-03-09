import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import UserInformationEditForm from "../../../components/UserInformationEditForm/UserInformationEditForm";
import UserPasswordEditForm from "../../../components/UserPasswordEditForm/UserPasswordEditForm";
import UserWithdrawalForm from "../../../components/UserWithdrawalForm/UserWithdrawalForm";
import * as userInformationEditApi from "./UserInformationEditApi";

const UserInformationEdit = ({
  match: {
    params: { userId }
  }
}) => {
  const [allow, setAllow] = useState("");
  const [allowErrMessage, setAllowErrMessage] = useState("");

  const [email, setEmail] = useState("");
  const [eamilErrMessage, setEmailErrMessage] = useState("");

  const [nickName, setNickName] = useState("");
  const [nickNameErrMessage, setNickNameErrMessage] = useState("");

  const [phoneNum, setPhoneNum] = useState("");
  const [phoneNumErrMessage, setPhoneNumErrMessage] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordErrMessage, setCurrentPasswordErrMessage] = useState(
    ""
  );

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordErrMessage, setNewPasswordErrMessage] = useState("");

  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [
    newPasswordConfirmErrMessage,
    setNewPasswordConfirmErrMessage
  ] = useState("");

  const userInformationData = {
    allow: {
      value: allow,
      setValue: setAllow,
      valueErrMessage: allowErrMessage,
      setValueErrMessage: setAllowErrMessage
    },
    email: {
      value: email,
      setValue: setEmail,
      valueErrMessage: eamilErrMessage,
      setValueErrMessage: setEmailErrMessage
    },
    nickName: {
      value: nickName,
      setValue: setNickName,
      valueErrMessage: nickNameErrMessage,
      setValueErrMessage: setNickNameErrMessage
    },
    phoneNum: {
      value: phoneNum,
      setValue: setPhoneNum,
      valueErrMessage: phoneNumErrMessage,
      setValueErrMessage: setPhoneNumErrMessage
    }
  };

  const userPasswordData = {
    currentPassword: {
      value: currentPassword,
      setValue: setCurrentPassword,
      valueErrMessage: currentPasswordErrMessage,
      setValueErrMessage: setCurrentPasswordErrMessage
    },
    newPassword: {
      value: newPassword,
      setValue: setNewPassword,
      valueErrMessage: newPasswordErrMessage,
      setValueErrMessage: setNewPasswordErrMessage,
      newPasswordConfirm,
      setNewPasswordConfirmErrMessage
    },
    newPasswordConfirm: {
      value: newPasswordConfirm,
      setValue: setNewPasswordConfirm,
      valueErrMessage: newPasswordConfirmErrMessage,
      setValueErrMessage: setNewPasswordConfirmErrMessage,
      newPassword
    }
  };

  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = response => {
    setAllow(response.allow);
    setEmail(response.email);
    setNickName(response.nickName);
    setPhoneNum(response.phoneNum);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const getUserInformation = () => {
    userInformationEditApi.getUser({
      userId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  const handleUserInformationEditSubmit = () => {
    let err = false;

    Object.keys(userInformationData).forEach(key => {
      if (
        userInformationData[key].value === "" ||
        userInformationData[key].valueErrMessage
      )
        err = true;
    });

    if (!err) {
      userInformationEditApi.putUser({
        nickName: userInformationData.nickName.value,
        email: userInformationData.email.value,
        phoneNum: userInformationData.phoneNum.value,
        allow: userInformationData.allow.value,
        apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
        apiCallSuccess: getUserInformation,
        apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
      });
    }
  };

  const handleUserPasswordEditSubmit = () => {
    let err = false;

    Object.keys(userPasswordData).forEach(key => {
      if (
        userPasswordData[key].value === "" ||
        userPasswordData[key].valueErrMessage
      )
        err = true;
    });

    if (!err) {
      userInformationEditApi.putUserPassword({
        curPassword: userPasswordData.currentPassword.value,
        newPassword: userPasswordData.newPassword.value,
        apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
        apiCallSuccess: getUserInformation,
        apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
      });
    }
  };

  useEffect(getUserInformation, []);

  return (
    <div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <>
            <UserInformationEditForm
              userInformationData={userInformationData}
              handleSubmit={handleUserInformationEditSubmit}
            />
            <UserPasswordEditForm
              userPasswordData={userPasswordData}
              handleSubmit={handleUserPasswordEditSubmit}
            />
            <UserWithdrawalForm />
          </>
        )}
      </LoadingSpinner>
    </div>
  );
};

UserInformationEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default UserInformationEdit;
