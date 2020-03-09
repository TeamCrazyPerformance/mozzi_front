import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import JoinRequestsTable from "../../../components/JoinRequestsTable/JoinRequestsTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import * as joinRequestsApi from "./joinRequestsApi";

const JoinRequests = props => {
  const { history } = props;
  const [joinRequests, setJoinRequests] = useState([
    {
      name: "",
      studentNumber: "",
      id: "",
      userId: ""
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
    setJoinRequests([...response.users]);
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

  const handlePageChange = (event, newPage = 0) => {
    joinRequestsApi.getJoinRequests({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  const joinRequestReview = ({ userId, currentPage, joinRequestType }) => {
    joinRequestsApi.postJoinRequestReview({
      userId,
      joinRequestType,
      currentPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: handlePageChange,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  const moveToUserPage = userId => {
    history.push(`/user/${userId}`);
  };

  // Component did mount
  useEffect(handlePageChange, []);

  return (
    <div>
      <div>Join request</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <JoinRequestsTable
            data={joinRequests}
            page={page}
            count={count}
            rowsPerPage={rowsPerPage}
            handlePageChange={handlePageChange}
            moveToUserPage={moveToUserPage}
            joinRequestReview={joinRequestReview}
          />
        )}
      </LoadingSpinner>
    </div>
  );
};

JoinRequests.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default JoinRequests;
