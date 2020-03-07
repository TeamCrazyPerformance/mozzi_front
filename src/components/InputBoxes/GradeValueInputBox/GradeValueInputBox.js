import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const GradeValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const GradeValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = GradeValueInputBoxStyles();

  const gradeValueCheck = targetValue => {
    const gradeValueIsEmpty = targetValue === "";
    if (gradeValueIsEmpty) return "Please fill name";

    const gradeRegex = /^[1-4]*$/.test(targetValue);
    if (!gradeRegex) return "Use only numbers 1 or more than 4 or less.";

    return "";
  };
  const handleNameValue = event => {
    setValue(event.target.value);
    setValueErrMessage(gradeValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Grade"
      type="string"
      value={value}
      onChange={handleNameValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

GradeValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default GradeValueInputBox;
