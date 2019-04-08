import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JoinRequestsTable from './../../components/JoinRequestsTable/JoinRequestsTable';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import Error from './../../components/Error/Error';

import * as JoinRequestsActions from './../../redux/admin/joinRequests/actions';

const JoinRequests = (props) => {
  const {
    joinRequests,
    page,
    count,
    total,
    error,
    loadingState,
    getJoinRequests,
    postJoinRequestApprove,
    postJoinRequestReject } = props;

  const _handlePageChange = (event, newPage) => getJoinRequests({ page: newPage });
  const _joinRequestApprove = (userId) => postJoinRequestApprove({ userId });
  const _joinRequestReject = (userId) => postJoinRequestReject({ userId });

  useEffect(() => {
    _handlePageChange(null, 0);
  }, []);

  return (
    <div>
      <div>Join Request</div>
      <LoadingSpinner loadingState={loadingState.joinRequests || loadingState.joinRequestApprove || loadingState.joinRequestReject}>
        {error === true
          ? <Error />
          : <JoinRequestsTable
            data={joinRequests}
            page={page}
            count={count}
            total={total}
            handlePageChange={_handlePageChange}
            joinRequestApprove={_joinRequestApprove}
            joinRequestReject={_joinRequestReject}
          />
        }
      </LoadingSpinner>
    </div>
  );
}

JoinRequests.propTypes = {
  joinRequests: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      stdNumber: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
  loadingState: PropTypes.shape({
    joinRequests: PropTypes.bool.isRequired,
    joinRequestApprove: PropTypes.bool.isRequired,
    joinRequestReject: PropTypes.bool.isRequired
  }).isRequired,
  getJoinRequests: PropTypes.func.isRequired,
  postJoinRequestApprove: PropTypes.func.isRequired,
  postJoinRequestReject: PropTypes.func.isRequired
};

const _mapStateToProps = state => {
  const adminJoinRequests = state.AdminJoinRequests;
  return {
    joinRequests: adminJoinRequests.joinRequests,
    page: adminJoinRequests.page,
    count: adminJoinRequests.count,
    total: adminJoinRequests.total,
    error: adminJoinRequests.error,
    loadingState: adminJoinRequests.loadingState
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(JoinRequestsActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(JoinRequests);