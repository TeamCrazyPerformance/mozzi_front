import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ExamEditForm from "../../../components/ExamEditForm/ExamEditForm";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import * as examEditApi from "./ExamEditApi";

const ExamEdit = props => {
  const { history, match } = props;
  const { examId } = match.params;

  const [year, setYear] = useState("");
  const [yearErrMessage, setYearErrMessage] = useState("");

  const [major, setMajor] = useState("");
  const [majorErrMessage, setMajorErrMessage] = useState("");

  const [grade, setGrade] = useState("");
  const [gradeErrMessage, setGradeErrMessage] = useState("");

  const [semester, setSemester] = useState("");
  const [semesterErrErrMessage, setSemesterErrMessage] = useState("");

  const [term, setTerm] = useState("");
  const [termErrMessage, setTermErrMessage] = useState("");

  const [name, setName] = useState("");
  const [nameErrMessage, setNameErrMessage] = useState("");

  const [professor, setProfessor] = useState("");
  const [professorErrMessage, setProfessorErrMessage] = useState("");

  const [content, setContent] = useState("");
  const [contentErrMessage, setContentErrMessage] = useState("");

  const examFormData = {
    year: {
      value: year,
      setValue: setYear,
      valueErrMessage: yearErrMessage,
      setValueErrMessage: setYearErrMessage
    },
    major: {
      value: major,
      setValue: setMajor,
      valueErrMessage: majorErrMessage,
      setValueErrMessage: setMajorErrMessage
    },
    grade: {
      value: grade,
      setValue: setGrade,
      valueErrMessage: gradeErrMessage,
      setValueErrMessage: setGradeErrMessage
    },
    semester: {
      value: semester,
      setValue: setSemester,
      valueErrMessage: semesterErrErrMessage,
      setValueErrMessage: setSemesterErrMessage
    },
    term: {
      value: term,
      setValue: setTerm,
      valueErrMessage: termErrMessage,
      setValueErrMessage: setTermErrMessage
    },
    name: {
      value: name,
      setValue: setName,
      valueErrMessage: nameErrMessage,
      setValueErrMessage: setNameErrMessage
    },
    professor: {
      value: professor,
      setValue: setProfessor,
      valueErrMessage: professorErrMessage,
      setValueErrMessage: setProfessorErrMessage
    },
    content: {
      value: content,
      setValue: setContent,
      valueErrMessage: contentErrMessage,
      setValueErrMessage: setContentErrMessage
    }
  };

  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setStateApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setStateGetExamInformationSuccess = examInformation => {
    setYear(examInformation.exam.year);
    setMajor(examInformation.exam.major);
    setGrade(examInformation.exam.grade);
    setSemester(examInformation.exam.semester);
    setTerm(examInformation.exam.term);
    setName(examInformation.exam.name);
    setProfessor(examInformation.exam.professor);
    setContent(examInformation.exam.content);
    setLoadingState(false);
    setError(false);
  };
  const setStateGetExamInformationFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const setStateHandleSubmitSuccess = () => {
    setLoadingState(false);
    setError(false);

    if (examId) {
      history.push(`/exam/exam/${examId}`);
    } else {
      history.push("/exam/exams");
    }
  };

  const setStateHandleSubmitFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const getExamInformation = () => {
    if (examId) {
      examEditApi.getExam({
        examId,
        apiCallStart: setStateApiCallStart,
        apiCallSuccess: setStateGetExamInformationSuccess,
        apiCallFailure: setStateGetExamInformationFailure
      });
    }
  };

  const handleSubmit = () => {
    let err = false;

    Object.keys(examFormData).forEach(key => {
      if (examFormData[key].value === "" || examFormData[key].valueErrMessage)
        err = true;
    });

    if (!err) {
      const examInformation = {
        year,
        major,
        grade,
        semester,
        term,
        name,
        professor,
        content
      };

      if (examId) {
        examEditApi.putExam({
          examId,
          examInformation,
          apiCallStart: setStateApiCallStart,
          apiCallSuccess: setStateHandleSubmitSuccess,
          apiCallFailure: setStateHandleSubmitFailure
        });
      } else {
        examEditApi.postExam({
          examInformation,
          apiCallStart: setStateApiCallStart,
          apiCallSuccess: setStateHandleSubmitSuccess,
          apiCallFailure: setStateHandleSubmitFailure
        });
      }
    }
  };

  // Component did mount.
  useEffect(getExamInformation, []);

  return (
    <LoadingSpinner loadingState={loadingState}>
      {error ? (
        <ErrorPage />
      ) : (
        <ExamEditForm examFormData={examFormData} handleSubmit={handleSubmit} />
      )}
    </LoadingSpinner>
  );
};

ExamEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      examId: PropTypes.string
    })
  })
};

ExamEdit.defaultProps = {
  match: { params: { examId: "" } }
};

export default ExamEdit;
