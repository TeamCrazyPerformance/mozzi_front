import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UsersTable from "../../../components/UsersTable/UsersTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";
import * as usersApi from "./UsersApi";

const Users = props => {
  const { history } = props;
  const [users, setUsers] = useState([
    {
      id: "",
      name: "",
      password: "",
      nickname: "",
      stdNumber: "",
      phoneNum: "",
      email: "",
      birthday: ""
    }
  ]);
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

  const moveToUserPage = userId => {
    history.push(`/user/${userId}`);
  };

  const handlePageChange = (event, newPage = 0) => {
    usersApi.getUsers({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure,
      setResponseToState: setGetUsersResponse
    });
  };

  // Component did mount
  useEffect(handlePageChange, []);

  return (
    <div>
      <div>Users</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <Error />
        ) : (
          <UsersTable
            data={users}
            page={page}
            count={count}
            total={total}
            moveToUserPage={moveToUserPage}
            handlePageChange={handlePageChange}
          />
        )}
      </LoadingSpinner>
    </div>
  );
};

Users.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Users;
