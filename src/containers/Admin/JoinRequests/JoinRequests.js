import React, { useEffect, useState } from "react";
import JoinRequestsTable from "../../../components/JoinRequestsTable/JoinRequestsTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";
import * as joinRequestsApi from "./JoinRequestsApi";

const JoinRequests = () => {
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
  const [total, setTotal] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setJoinRequestsResponse = ({ getJoinRequestsResponse }) => {
    setJoinRequests([...getJoinRequestsResponse.users]);
    setPage(getJoinRequestsResponse.page);
    setCount(getJoinRequestsResponse.count);
    setTotal(getJoinRequestsResponse.total);
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

  const handlePageChange = (event, newPage = 0) => {
    joinRequestsApi.getJoinRequests({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure,
      setResponseToState: setJoinRequestsResponse
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

  // Component did mount
  useEffect(handlePageChange, []);

  return (
    <div>
      <div>Join Request</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <Error />
        ) : (
          <JoinRequestsTable
            data={joinRequests}
            page={page}
            count={count}
            total={total}
            handlePageChange={handlePageChange}
            joinRequestReview={joinRequestReview}
          />
        )}
      </LoadingSpinner>
    </div>
  );
};

export default JoinRequests;
