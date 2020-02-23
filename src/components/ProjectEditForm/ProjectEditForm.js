import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const projectEditFormStyles = makeStyles(() => ({
  inputBoxWrapperClassName: {
    marginBottom: "10px"
  }
}));

const ProjectEditForm = props => {
  const {
    titleValue,
    handleTitleValue,
    memberValue,
    handleMemberValue,
    contentValue,
    handleContentValue,
    handleSubmit
  } = props;

  const { inputBoxWrapperClassName } = projectEditFormStyles();

  const [titleValueIsEmpty, setTitleValueIsEmpty] = useState(false);
  const [memberValueIsEmpty, setMemberValueIsEmpty] = useState(false);
  const [contentValueIsEmpty, setContentValueIsEmpty] = useState(false);

  const validationCheck = () => {
    let valueIsEmpty = false;

    if (titleValue === "") {
      setTitleValueIsEmpty(true);
      valueIsEmpty = true;
    } else setTitleValueIsEmpty(false);

    if (memberValue === "") {
      setMemberValueIsEmpty(true);
      valueIsEmpty = true;
    } else setMemberValueIsEmpty(false);

    if (contentValue === "") {
      setContentValueIsEmpty(true);
      valueIsEmpty = true;
    } else setContentValueIsEmpty(false);

    return !valueIsEmpty;
  };

  const validationCheckAndHandleSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();

    const emptyValidation = validationCheck();

    if (emptyValidation) handleSubmit();
  };

  return (
    <div className="project-edit-form">
      <form
        className="project-edit-form__form"
        onSubmit={validationCheckAndHandleSubmit}
      >
        <div
          className={`project-edit-form__form__input-box-wrapper ${inputBoxWrapperClassName}`}
        >
          <TextField
            className="project-edit-form__form__input-box-wrapper__title-input"
            label="Title"
            value={titleValue}
            onChange={handleTitleValue}
            error={titleValueIsEmpty}
            helperText={titleValueIsEmpty ? "Please fill Title" : " "}
            fullWidth
          />
        </div>
        <div
          className={`project-edit-form__form__input-box-wrapper ${inputBoxWrapperClassName}`}
        >
          <TextField
            className="project-edit-form__form__input-box-wrapper__member-input"
            label="Member"
            value={memberValue}
            onChange={handleMemberValue}
            error={memberValueIsEmpty}
            helperText={memberValueIsEmpty ? "Please fill Member" : " "}
            fullWidth
          />
        </div>
        <div
          className={`project-edit-form__form__input-box-wrapper ${inputBoxWrapperClassName}`}
        >
          <TextField
            className="project-edit-form__form__input-box-wrapper__content-input"
            label="Content"
            rows="20"
            value={contentValue}
            onChange={handleContentValue}
            error={contentValueIsEmpty}
            helperText={contentValueIsEmpty ? "Please fill Content" : " "}
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

ProjectEditForm.propTypes = {
  titleValue: PropTypes.string,
  handleTitleValue: PropTypes.func.isRequired,
  memberValue: PropTypes.string,
  handleMemberValue: PropTypes.func.isRequired,
  contentValue: PropTypes.string,
  handleContentValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

ProjectEditForm.defaultProps = {
  titleValue: "",
  memberValue: "",
  contentValue: ""
};

export default ProjectEditForm;
