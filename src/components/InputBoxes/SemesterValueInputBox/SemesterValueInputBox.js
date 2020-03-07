import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const SemesterValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));
const SemesterValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = SemesterValueInputBoxStyles();

  const semesterValueCheck = targetValue => {
    const semesterValueIsEmpty = targetValue === "";
    if (semesterValueIsEmpty) return "Please fill semester";

    const semesterRegex = /^[1-2가-힣+]*(학기)$/.test(targetValue);
    if (!semesterRegex) return "Input XX학기 format";

    return "";
  };

  const handleSemesterValue = event => {
    setValue(event.target.value);
    setValueErrMessage(semesterValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Semester"
      type="string"
      value={value}
      onChange={handleSemesterValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

SemesterValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default SemesterValueInputBox;
