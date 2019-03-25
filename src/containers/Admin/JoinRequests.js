import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JoinRequestsTable from './../../components/JoinRequestsTable/JoinRequestsTable';

// import * as JoinRequestActions from './../../redux/admin/joinRequests/actions';

const JoinRequests = (props) => {
  const [data, setData] = useState([
    {name: 'Kang', stdNumber: '16101340', userId: '001'},
    {name: 'Ji', stdNumber: '16101340', userId: '002'},
    {name: 'Hoon', stdNumber: '16101340', userId: '003'},
    {name: 'zzang', stdNumber: '16101340', userId: '004'},
    {name: 'Lee', stdNumber: '16101340', userId: '005'},
    {name: 'Song', stdNumber: '16101340', userId: '006'},
    {name: 'Yeol', stdNumber: '16101340', userId: '007'},
    {name: 'zzangzzang', stdNumber: '16101340', userId: '008'},
    {name: 'man', stdNumber: '16101340', userId: '009'},
    {name: 'gkgkgkgk', stdNumber: '16101340', userId: '010'},
  ]);

  const [page, setPage] = useState(0);
  const [count, setCount] = useState(10);
  const [total, setTotal] = useState(300);

  const handlePageChange = (event, newPage) => console.log(`page change: ${newPage}`);
  const joinRequestApprove = (userId) => console.log(`${userId} approve`);
  const joinRequestReject = (userId) => console.log(`${userId} reject`);

  return (
    <div>
      <div>Join Request</div>
      <JoinRequestsTable
        data={data}
        page={page}
        count={count}
        total={total}
        handlePageChange={handlePageChange}
        joinRequestApprove={joinRequestApprove}
        joinRequestReject={joinRequestReject}
      />
    </div>
  );
}

export default JoinRequests;

// Check prop types.
// JoinRequests.propTypes = {
//   isSignIn: PropTypes.bool.isRequired,
//   loadingState: PropTypes.objectOf(PropTypes.bool),
// };

// Map state to props.
// const _mapStateToProps = (state) => {
//   const auth = state.Auth;
//   return {
//     isSignIn: auth.isSignIn,
//     loadingState: {
//       sigIn: auth.loadingState.sigIn
//     }
//   };
// };

// Map dispatch to props.
// const _mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(JoinRequestActions, dispatch);
// };

// Connect state and dispatch to SignIn props.
// export default connect(_mapStateToProps, _mapDispatchToProps)(JoinRequests);