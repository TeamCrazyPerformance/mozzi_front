import React, { useEffect, useState } from 'react';

import UserInformation from '../../../components/UserInformation/UserInformation.js';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Error from '../../../components/Error/Error';

import * as userApi from './UserApi';

const User = (props) => {
  const userId = props.match.params.userid;
  const [user, setUser] = useState({
    id: '',
    name: '',
    password: '',
    nickname: '',
    stdNumber: '',
    phoneNum: '',
    email: '',
    birthday: '',
  });
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setGetUserResponse = ({ getUserResponse }) => setUser({ ...getUserResponse.user });
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

  const getUserInformation = ({ userId }) => {
    setLoadingStateAndErrorWhenApiCallStart();
    userApi.getUser({
      userId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure,
      setResponseToState: setGetUserResponse,
    });
  };

  useEffect(() => getUserInformation({ userId }), []);

  return (
    <div>
      <div>User</div>
      <LoadingSpinner loadingState={loadingState}>
        {
          error
            ? <Error />
            : <UserInformation data={user} />
        }
      </LoadingSpinner>
    </div>
  );
};

export default User;
