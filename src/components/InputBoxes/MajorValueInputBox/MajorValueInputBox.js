import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const MajorValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const MajorValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = MajorValueInputBoxStyles();

  const majorValueCheck = targetValue => {
    const majorValueIsEmpty = targetValue === "";
    if (majorValueIsEmpty) return "Please fill major";

    const majorRegex = /^[가-힣+]*(학과)$/.test(targetValue);
    if (!majorRegex) return "Input XX학과 format";

    return "";
  };

  const handleMajorValue = event => {
    setValue(event.target.value);
    setValueErrMessage(majorValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Major"
      type="string"
      value={value}
      onChange={handleMajorValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

MajorValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default MajorValueInputBox;
