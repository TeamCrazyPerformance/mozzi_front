import React, { useEffect, useState } from 'react';

import UsersTable from '../../../components/UsersTable/UsersTable.js';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Error from '../../../components/Error/Error';

import * as usersApi from './UsersApi';

const Users = props => {
  const [users, setUsers] = useState([{
    id: '',
    name: '',
    password: '',
    nickname: '',
    stdNumber: '',
    phoneNum: '',
    email: '',
    birthday: ''
  }]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setGetUsersResponse = ({ getUsersResponse }) => {
    setUsers([...getUsersResponse.users]);
    setPage(getUsersResponse.page);
    setCount(getUsersResponse.count);
    setTotal(getUsersResponse.total);
  };
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

  const handlePageChange = (event, newPage) => {
    usersApi.getUsers({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure,
      setResponseToState: setGetUsersResponse
    });
  };

  useEffect(() => handlePageChange(null, 0), []);

  return(
    <div>
      <div>Users</div>
      <LoadingSpinner loadingState={loadingState}>
        {
          error
          ? <Error />
          : <UsersTable
              data={users}
              page={page}
              count={count}
              total={total}
              handlePageChange={handlePageChange}
            />
        }
      </LoadingSpinner>
    </div>
  );
};

export default Users;