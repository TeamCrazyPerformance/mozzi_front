import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const BirthdayValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const TermValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = BirthdayValueInputBoxStyles();

  const termValueCheck = targetValue => {
    const termValueIsEmpty = targetValue === "";
    if (termValueIsEmpty) return "Please fill term";

    const termRegex = /^[가-힣+]*(고사)$/.test(targetValue);
    if (!termRegex) return "Input XX고사 format";

    return "";
  };

  const handleTermValue = event => {
    setValue(event.target.value);
    setValueErrMessage(termValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Term"
      type="string"
      value={value}
      onChange={handleTermValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

TermValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default TermValueInputBox;
