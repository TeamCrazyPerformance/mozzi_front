import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const YearValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const YearValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = YearValueInputBoxStyles();

  const yearValueCheck = targetValue => {
    const yearValueIsEmpty = targetValue === "";
    if (yearValueIsEmpty) return "Please fill year";

    const yearRegex = /^[0-9]{4}$/.test(targetValue);
    if (!yearRegex) return "Use YYYY format";

    return "";
  };
  const handleYearValue = event => {
    setValue(event.target.value);
    setValueErrMessage(yearValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Year"
      type="string"
      value={value}
      onChange={handleYearValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

YearValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default YearValueInputBox;
