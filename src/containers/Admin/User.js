import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from './../../redux/admin/user/actions';

const User = props => {
  console.log(props.match.params.userid);
  return(
    <div>
      User
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    stdNumber: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired
  }).isRequired,
  error: PropTypes.bool.isRequired,
  loadingState: PropTypes.shape({
    user: PropTypes.bool.isRequired
  }).isRequired,
  getUser: PropTypes.func.isRequired
};

const _mapStateToProps = state => {
  const adminUser = state.adminUser;
  return {
    user: adminUser.user,
    error: adminUser.error,
    loadingState: adminUser.loadingState
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(userActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(User);