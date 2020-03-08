import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import ExamInformationList from "../../../components/ExamInformationList/ExamInformationList";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import * as ExamApi from "./ExamApi";

const Exam = props => {
  const { myId, match, history } = props;
  const { examId } = match.params;
  const [examInformation, setExamInformation] = useState({
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
  });
  const [selfIdentification, setSelfIdentification] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = responseExam => {
    setExamInformation(responseExam);
    if (responseExam.authorId === myId) setSelfIdentification(true);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const deleteExam = () => {
    ExamApi.deleteExams({
      examId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: () => history.push("/exam/exams"),
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  const getExam = () => {
    ExamApi.getExam({
      examId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  useEffect(getExam, []);

  return (
    <div>
      <div>Exam</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <ExamInformationList examInformation={examInformation} />
        )}
        {selfIdentification ? (
          <div className="button-wrapper">
            <Button
              className="button-wrapper__edit-button"
              variant="contained"
              color="primary"
              component={Link}
              to={`/exam/exam/${examId}/edit`}
            >
              Edit
            </Button>
            <Button
              className="button-wrapper__delete-button"
              variant="contained"
              color="primary"
              onClick={() => deleteExam()}
            >
              Delete
            </Button>
          </div>
        ) : (
          <></>
        )}
      </LoadingSpinner>
    </div>
  );
};

Exam.propTypes = {
  myId: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      examId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => {
  const { auth } = state;
  return { myId: auth.userId };
};

export default connect(mapStateToProps)(Exam);
