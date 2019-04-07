import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JoinRequestsTable from './../../components/JoinRequestsTable/JoinRequestsTable';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';

import * as JoinRequestActions from './../../redux/admin/joinRequests/actions';

const JoinRequests = (props) => {
  const {
    joinRequestList,
    page,
    count,
    total,
    error,
    loadingState,
    getJoinRequestList,
    postJoinRequestApprove,
    postJoinRequestReject } = props;

  const _handlePageChange = (event, newPage) => getJoinRequestList({ page: newPage });
  const _joinRequestApprove = (userId) => postJoinRequestApprove({ userId });
  const _joinRequestReject = (userId) => postJoinRequestReject({ userId });

  useEffect(() => {
    _handlePageChange(null, 0);
  }, []);

  return (
    <div>
      <div>Join Request</div>
      <LoadingSpinner loadingState={loadingState.joinRequestList || loadingState.joinRequestApprove || loadingState.joinRequestReject}>
        {error === true
          ? <div>Error. Plz press F5</div>
          : <JoinRequestsTable
            data={joinRequestList}
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
  joinRequestList: PropTypes.arrayOf(
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
    joinRequestList: PropTypes.bool.isRequired,
    joinRequestApprove: PropTypes.bool.isRequired,
    joinRequestReject: PropTypes.bool.isRequired
  }).isRequired,
  getJoinRequestList: PropTypes.func.isRequired,
  postJoinRequestApprove: PropTypes.func.isRequired,
  postJoinRequestReject: PropTypes.func.isRequired
};

const _mapStateToProps = state => {
  const adminJoinRequest = state.AdminJoinRequest;
  return {
    joinRequestList: adminJoinRequest.joinRequestList,
    page: adminJoinRequest.page,
    count: adminJoinRequest.count,
    total: adminJoinRequest.total,
    error: adminJoinRequest.error,
    loadingState: adminJoinRequest.loadingState
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(JoinRequestActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(JoinRequests);