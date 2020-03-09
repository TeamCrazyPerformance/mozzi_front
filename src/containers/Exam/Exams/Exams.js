import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ExamsTable from "../../../components/ExamsTable/ExamsTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import getExams from "./examsApi";

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
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = response => {
    setExams([...response.exams]);
    setPage(response.page);
    setCount(response.total);
    setRowsPerPage(response.count);
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
    getExams({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  useEffect(handlePageChange, []);

  return (
    <div>
      <div>Exams</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <ExamsTable
            data={exams}
            page={page}
            count={count}
            rowsPerPage={rowsPerPage}
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
