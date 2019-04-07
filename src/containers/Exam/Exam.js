import React, { useState, useEffect } from 'react';
import ExamTable from './../../components/ExamTable/ExamTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as getExamActions from './../../redux/Exam/ExamTable/actions';

const Exam = (props) => {
  const {
    examTableData,
    page,
    count,
    total,
    error,
    loadingState,
    getExamTableData,
  } = props;

  const handlePageChange = (event, newPage) => getExamTableData({page: newPage});

  // useEffect(() => {
  //   getExamTableData(0);
  // }, [examTableData]);

  // useEffect(() => {
  //   console.log('work');
  // });

  return(
    <div>
      <ExamTable
        data={examTableData}
        page={page}
        count={count}
        total={total}
        handlePageChange={handlePageChange}
      ></ExamTable>
      {/*여기서 부터가 문제임examTableData.total*/}
    </div>
  );
};

const _mapStateToProps = state => {
  //???
  const examTableRequest = state;
  return {
    examTable: examTableRequest.examTableData,
    page: examTableRequest.page,
    count: examTableRequest.count,
    total: examTableRequest.total,
    error: examTableRequest.error,
    loadingState: examTableRequest.loadingState,
  };
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(getExamActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(Exam);