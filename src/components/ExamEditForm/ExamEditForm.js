import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import YearValueInputBox from "../InputBoxes/YearValueInputBox/YearValueInputBox";
import MajorValueInputBox from "../InputBoxes/MajorValueInputBox/MajorValueInputBox";
import GradeValueInputBox from "../InputBoxes/GradeValueInputBox/GradeValueInputBox";
import SemesterValueInputBox from "../InputBoxes/SemesterValueInputBox/SemesterValueInputBox";
import TermValueInputBox from "../InputBoxes/TermValueInputBox/TermValueInputBox";
import NameValueInputBox from "../InputBoxes/NameValueInputBox/NameValueInputBox";
import ContentValueInputBox from "../InputBoxes/ContentValueInputBox/ContentValueInputBox";

const projectEditFormStyles = makeStyles(() => ({
  examEditFormWrapperClassName: {
    marginBottom: "20px"
  },
  buttonWrapperClassName: {
    textAlign: "right"
  }
}));

const ProjectEditForm = props => {
  const { examFormData, handleSubmit } = props;
  const {
    examEditFormWrapperClassName,
    buttonWrapperClassName
  } = projectEditFormStyles();

  const validationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className={`project-edit-form ${examEditFormWrapperClassName}`}>
      <form
        className="project-edit-form__form"
        onSubmit={validationCheckAndHandleSubmit}
      >
        <YearValueInputBox
          value={examFormData.year.value}
          setValue={examFormData.year.setValue}
          valueErrMessage={examFormData.year.valueErrMessage}
          setValueErrMessage={examFormData.year.setValueErrMessage}
        />
        <MajorValueInputBox
          value={examFormData.major.value}
          setValue={examFormData.major.setValue}
          valueErrMessage={examFormData.major.valueErrMessage}
          setValueErrMessage={examFormData.major.setValueErrMessage}
        />
        <GradeValueInputBox
          value={examFormData.grade.value}
          setValue={examFormData.grade.setValue}
          valueErrMessage={examFormData.grade.valueErrMessage}
          setValueErrMessage={examFormData.grade.setValueErrMessage}
        />
        <SemesterValueInputBox
          value={examFormData.semester.value}
          setValue={examFormData.semester.setValue}
          valueErrMessage={examFormData.semester.valueErrMessage}
          setValueErrMessage={examFormData.semester.setValueErrMessage}
        />
        <TermValueInputBox
          value={examFormData.term.value}
          setValue={examFormData.term.setValue}
          valueErrMessage={examFormData.term.valueErrMessage}
          setValueErrMessage={examFormData.term.setValueErrMessage}
        />
        <NameValueInputBox
          value={examFormData.name.value}
          setValue={examFormData.name.setValue}
          valueErrMessage={examFormData.name.valueErrMessage}
          setValueErrMessage={examFormData.name.setValueErrMessage}
          label="Lecture name"
        />
        <NameValueInputBox
          value={examFormData.professor.value}
          setValue={examFormData.professor.setValue}
          valueErrMessage={examFormData.professor.valueErrMessage}
          setValueErrMessage={examFormData.professor.setValueErrMessage}
          label="Professor name"
        />
        <ContentValueInputBox
          value={examFormData.content.value}
          setValue={examFormData.content.setValue}
          valueErrMessage={examFormData.content.valueErrMessage}
          setValueErrMessage={examFormData.content.setValueErrMessage}
        />
        <div className={buttonWrapperClassName}>
          <Button
            className="submit-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

ProjectEditForm.propTypes = {
  examFormData: PropTypes.shape({
    year: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    major: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    grade: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    semester: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    term: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    name: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    professor: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    content: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    })
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default ProjectEditForm;
