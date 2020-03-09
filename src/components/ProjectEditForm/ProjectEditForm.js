import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import NameValueInputBox from "../InputBoxes/NameValueInputBox/NameValueInputBox";
import ContentValueInputBox from "../InputBoxes/ContentValueInputBox/ContentValueInputBox";

const projectEditFormStyles = makeStyles(() => ({
  inputBoxWrapperClassName: {
    marginBottom: "10px"
  },
  buttonWrapperClassName: {
    textAlign: "right"
  }
}));

const ProjectEditForm = props => {
  const { projectFormData, handleSubmit } = props;
  const {
    inputBoxWrapperClassName,
    buttonWrapperClassName
  } = projectEditFormStyles();

  const validationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className={`project-edit-form ${inputBoxWrapperClassName}`}>
      <form
        className="project-edit-form__form"
        onSubmit={validationCheckAndHandleSubmit}
      >
        <NameValueInputBox
          value={projectFormData.projectName.value}
          setValue={projectFormData.projectName.setValue}
          valueErrMessage={projectFormData.projectName.valueErrMessage}
          setValueErrMessage={projectFormData.projectName.setValueErrMessage}
          label="Project name"
        />
        <NameValueInputBox
          value={projectFormData.projectLeader.value}
          setValue={projectFormData.projectLeader.setValue}
          valueErrMessage={projectFormData.projectLeader.valueErrMessage}
          setValueErrMessage={projectFormData.projectLeader.setValueErrMessage}
          label="Project leader"
        />
        <ContentValueInputBox
          value={projectFormData.projectContent.value}
          setValue={projectFormData.projectContent.setValue}
          valueErrMessage={projectFormData.projectContent.valueErrMessage}
          setValueErrMessage={projectFormData.projectContent.setValueErrMessage}
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
  projectFormData: PropTypes.shape({
    projectName: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }).isRequired,
    projectLeader: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }).isRequired,
    projectContent: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default ProjectEditForm;
