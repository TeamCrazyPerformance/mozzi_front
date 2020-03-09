import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UsersTable from "../../../components/UsersTable/UsersTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import getUsers from "./usersApi";

const Users = props => {
  const { history } = props;
  const [users, setUsers] = useState([
    {
      id: "",
      name: "",
      nickname: "",
      stdNumber: "",
      phoneNum: "",
      email: "",
      birthday: ""
    }
  ]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = response => {
    setUsers([...response.users]);
    setPage(response.page);
    setCount(response.total);
    setRowsPerPage(response.count);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const moveToUserPage = userId => {
    history.push(`/user/${userId}`);
  };

  const handlePageChange = (event, newPage = 0) => {
    getUsers({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  // Component did mount
  useEffect(handlePageChange, []);

  return (
    <div>
      <div>Users</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <UsersTable
            data={users}
            page={page}
            count={count}
            rowsPerPage={rowsPerPage}
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
