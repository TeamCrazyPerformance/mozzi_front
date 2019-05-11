import React, { useEffect, useState } from 'react';

import JoinRequestsTable from '../../../components/JoinRequestsTable/JoinRequestsTable';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Error from '../../../components/Error/Error';

import * as joinRequestsApi from './JoinRequestsApi';

const JoinRequests = props => {
  const [joinRequests, setJoinRequests] = useState([{
    name: '',
    stdNumber: '',
    userId: ''
  }]);
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

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingStateToFalse();
    setErrorToTrue();
  };

  const handlePageChange = (event, newPage) => {
    setLoadingStateAndErrorWhenApiCallStart();
    const getJoinRequestsResponse = joinRequestsApi.getJoinRequests({ page: newPage });

    if(getJoinRequestsResponse.success === true) {
      setJoinRequestsResponse({ getJoinRequestsResponse });
      setLoadingStateToFalse();
    } else if(getJoinRequestsResponse.success === false) {
      setLoadingStateAndErrorWhenApiCallFailure();
    } else {
      // TODO
      console.log('Response Error');
    }
  };

  const joinRequestApprove = ({ userId, currentPage }) => {
    setLoadingStateAndErrorWhenApiCallStart();
    const postJoinRequestApproveResponse = joinRequestsApi.postJoinRequestApprove({ userId });

    if(postJoinRequestApproveResponse.success === true) {
      setLoadingStateToFalse();
      handlePageChange(null, currentPage);
    } else if(postJoinRequestApproveResponse.success === false) {
      setLoadingStateAndErrorWhenApiCallFailure();
    } else {
      // TODO
      console.log('Response Error');
    }
  }

  const joinRequestReject = ({ userId, currentPage }) => {
    setLoadingStateAndErrorWhenApiCallStart();
    const postJoinRequestRejectResponse = joinRequestsApi.postJoinRequestReject({ userId });

    if(postJoinRequestRejectResponse.success === true) {
      setLoadingStateToFalse();
      handlePageChange(null, currentPage);
    } else if(postJoinRequestRejectResponse.success === false) {
      setLoadingStateAndErrorWhenApiCallFailure();
    } else {
      // TODO
      console.log('Response Error');
    }
  }

  // Component did mount
  useEffect(() => handlePageChange(null, 0), []);

  return (
    <div>
      <div>Join Request</div>
      <LoadingSpinner loadingState={loadingState}>
        {
          error
          ? <Error />
          : <JoinRequestsTable
              data={joinRequests}
              page={page}
              count={count}
              total={total}
              handlePageChange={handlePageChange}
              joinRequestApprove={joinRequestApprove}
              joinRequestReject={joinRequestReject}
          />
        }
      </LoadingSpinner>
    </div>
  );
}

export default JoinRequests;