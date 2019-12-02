import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import UserInformationTable from "../../../components/UserInformationTable/UserInformationTable.js";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";

import * as userApi from "./UserApi";

const User = ({
  match: {
    params: { userId }
  }
}) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
    nickname: "",
    stdNumber: "",
    phoneNum: "",
    email: "",
    birthday: ""
  });
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setGetUserResponse = ({ getUserResponse }) =>
    setUser({ ...getUserResponse.user });
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
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingStateToFalse();
    setErrorToTrue();
  };

  const getUserInformation = () => {
    setLoadingStateAndErrorWhenApiCallStart();
    userApi.getUser({
      userId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure,
      setResponseToState: setGetUserResponse
    });
  };

  useEffect(getUserInformation, []);

  return (
    <div>
      <div>User</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? <Error /> : <UserInformationTable data={user} />}
      </LoadingSpinner>
    </div>
  );
};

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default User;
