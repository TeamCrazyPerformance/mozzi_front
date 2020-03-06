import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ExamsTable from "../../../components/ExamsTable/ExamsTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";
import * as ExamsApi from "./ExamsApi";

const Exams = props => {
  const { history } = props;
  const [exams, setExams] = useState([
    {
      examId: "",
      authorId: "",
      year: "",
      major: "",
      grade: "",
      semester: "",
      term: "",
      name: "",
      professor: "",
      content: ""
    }
  ]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setGetExamsResponse = ({ getProjectsResponse }) => {
    setExams([...getProjectsResponse.exams]);
    setPage(getProjectsResponse.page);
    setCount(getProjectsResponse.count);
    setTotal(getProjectsResponse.total);
  };

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = () => {
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const moveToEaxmPage = examId => {
    history.push(`/exam/exam/${examId}`);
  };

  const handlePageChange = (event, newPage = 0) => {
    ExamsApi.getExams({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure,
      setResponseToState: setGetExamsResponse
    });
  };

  useEffect(handlePageChange, []);

  return (
    <div>
      <div>Exams</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <Error />
        ) : (
          <ExamsTable
            data={exams}
            page={page}
            count={count}
            total={total}
            moveToEaxmPage={moveToEaxmPage}
            handlePageChange={handlePageChange}
          />
        )}
      </LoadingSpinner>
    </div>
  );
};

Exams.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Exams;
