import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const projectEditFormStyles = makeStyles(() => ({
  inputBoxWrapperClassName: {
    marginBottom: "10px"
  }
}));

const ProjectEditForm = () => {
  const { inputBoxWrapperClassName } = projectEditFormStyles();
  return (
    <div className="project-edit-form">
      <form className="project-edit-form__form">
        <div
          className={`project-edit-form__form__input-box-wrapper ${inputBoxWrapperClassName}`}
        >
          <TextField
            className="project-edit-form__form__input-box-wrapper__title-input"
            label="Title"
            fullWidth
          />
        </div>
        <div
          className={`project-edit-form__form__input-box-wrapper ${inputBoxWrapperClassName}`}
        >
          <TextField
            className="project-edit-form__form__input-box-wrapper__member-input"
            label="member"
            fullWidth
          />
        </div>
        <div
          className={`project-edit-form__form__input-box-wrapper ${inputBoxWrapperClassName}`}
        >
          <TextField
            className="project-edit-form__form__input-box-wrapper__content-input"
            label="content"
            rows="20"
            multiline
            fullWidth
          />
        </div>
        <div className="project-edit-form__form__button-wrapper">
          <Button
            className="project-edit-form__form__button-wrapper__submit-button"
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

export default ProjectEditForm;
