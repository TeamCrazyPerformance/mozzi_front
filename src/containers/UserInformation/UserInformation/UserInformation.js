import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import UserInformationList from "../../../components/UserInformationList/UserInformationList";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";
import * as userInformationApi from "./UserInformationApi";

const UserInformation = ({
  match: {
    params: { userId }
  }
}) => {
  const [userInformation, setUserInformation] = useState({
    nickname: "",
    id: "",
    email: "",
    role: "",
    name: "",
    birthday: "",
    phoneNumber: "",
    major: "",
    studentNumber: "",
    createAt: "",
    allow: []
  });
  const [selfIdentification, setSelfIdentification] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = responseUserInformation => {
    setUserInformation(responseUserInformation);
    if (responseUserInformation.id === userId) setSelfIdentification(true);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const getUserInformation = () => {
    userInformationApi.getUserInformation({
      userId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  useEffect(getUserInformation, []);

  return (
    <div>
      <div>User</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <Error />
        ) : (
          <UserInformationList userInformation={userInformation} />
        )}
        {selfIdentification ? (
          <div className="edit-button-wrapper">
            <Button
              className="edit-button-wrapper__edit-button"
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
          </div>
        ) : (
          <></>
        )}
      </LoadingSpinner>
    </div>
  );
};

UserInformation.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default UserInformation;
