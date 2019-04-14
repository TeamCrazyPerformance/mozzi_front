import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UsersTable from './../../components/UsersTable/UsersTable.js';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import Error from './../../components/Error/Error';

import * as usersActions from './../../redux/admin/users/actions';

const Users = props => {
  const {
    users,
    page,
    count,
    total,
    error,
    loadingState,
    getUsers } = props;

  const _handlePageChange = (event, newPage) => getUsers({ page: newPage });

  useEffect(() => {
    _handlePageChange(null, 0);
  }, []);

  return(
    <div>
      <div>Users</div>
      <LoadingSpinner loadingState={loadingState.users}>
        {
          error
          ? <Error />
          : <UsersTable
              data={users}
              page={page}
              count={count}
              total={total}
              handlePageChange={_handlePageChange}
            />
        }
      </LoadingSpinner>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      stdNumber: PropTypes.string.isRequired,
      phoneNum: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
  loadingState: PropTypes.shape({
    users: PropTypes.bool.isRequired
  }).isRequired,
  getUsers: PropTypes.func.isRequired
};

const _mapStateToProps = state => {
  const adminUsers = state.adminUsers;
  return {
    users: adminUsers.users,
    page: adminUsers.page,
    count: adminUsers.count,
    total: adminUsers.total,
    error: adminUsers.error,
    loadingState: adminUsers.loadingState
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(usersActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(Users);