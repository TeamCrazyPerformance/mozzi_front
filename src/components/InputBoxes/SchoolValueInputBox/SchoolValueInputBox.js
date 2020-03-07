import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const SchoolValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const SchoolValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = SchoolValueInputBoxStyles();

  const schoolValueCheck = targetValue => {
    const schoolValueIsEmpty = targetValue === "";
    if (schoolValueIsEmpty) return "Please fill school";

    const schoolRegex = /^[가-힣+]*(대학교)$/.test(targetValue);
    if (!schoolRegex) return "Input XX대학교 format";

    return "";
  };
  const handleSchoolValue = event => {
    setValue(event.target.value);
    setValueErrMessage(schoolValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="School"
      type="string"
      value={value}
      onChange={handleSchoolValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

SchoolValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default SchoolValueInputBox;
