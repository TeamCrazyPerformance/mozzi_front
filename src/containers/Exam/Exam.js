import React, { useState, useEffect } from 'react';
import ExamTable from './../../components/ExamTable/ExamTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as getExamActions from './../../redux/Exam/ExamTable/actions';
import { Button } from '@material-ui/core';

const bonobono = (props) => {
  const {param} = props;

  return (
    <div><p>test</p>
      {
        (() => {
          if(true){
            return (bonobono);
          }
        })
      }
    </div>
  );
};

const Exam = (props) => {
  const {
    examTableDataRequestList,
    page,
    count,
    total,
    error,
    loadingState,
    // api 이름
    getExamTableDataRequestList,
  } = props;

  const handlePageChange = (event, newPage) => getExamTableDataRequestList({page: newPage});
  const [b, setB] = useState(0);

  useEffect(() => {
    handlePageChange(null, 0);
  }, []);

  return(
    <div>
      <ExamTable
        data={examTableDataRequestList}
        page={page}
        count={count}
        total={total}
        handlePageChange={handlePageChange}
      ></ExamTable>
      {b}
      <button onClick = {() => setB(b => b + 1)}>click!</button>
      <bonobono param={b}></bonobono>
    </div>
  );
};

const _mapStateToProps = state => {
  //???
  const examGetRequest = state.ExamGetRequest;
  return {
    examTableDataRequestList: examGetRequest.examTableDataRequestList,
    page: examGetRequest.page,
    count: examGetRequest.count,
    total: examGetRequest.total,
    error: examGetRequest.error,
    loadingState: examGetRequest.loadingState,
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(getExamActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(Exam);