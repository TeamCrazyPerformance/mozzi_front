import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const StudentNumberValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const StudentNumberValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = StudentNumberValueInputBoxStyles();

  const stdNumValueCheck = targetValue => {
    const stdNumValueIsEmpty = targetValue === "";
    if (stdNumValueIsEmpty) return "Please fill student number";

    const stdNumRegex = /^[0-9]{8}$/.test(targetValue);
    if (!stdNumRegex) return "Input correct student number";

    return "";
  };

  const handleStdNumValue = event => {
    setValue(event.target.value);
    setValueErrMessage(stdNumValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Student number"
      type="string"
      value={value}
      onChange={handleStdNumValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

StudentNumberValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default StudentNumberValueInputBox;
