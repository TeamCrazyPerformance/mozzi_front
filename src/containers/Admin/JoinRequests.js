import React, {useState} from 'react';
import PropTypes from 'prop-types';

import JoinRequestsTable from './../../components/JoinRequestsTable/JoinRequestsTable';

const JoinRequests = () => {
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