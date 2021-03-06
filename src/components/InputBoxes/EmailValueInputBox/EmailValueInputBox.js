import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const EmailValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const EmailValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = EmailValueInputBoxStyles();

  const emailValueCheck = targetValue => {
    const emailValueIsEmpty = targetValue === "";
    if (emailValueIsEmpty) return "Please fill email";

    const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
      targetValue
    );
    if (!emailRegex) return "Input corret email format";

    return "";
  };
  const handleEmailValue = event => {
    setValue(event.target.value);
    setValueErrMessage(emailValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Email"
      type="string"
      value={value}
      onChange={handleEmailValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

EmailValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default EmailValueInputBox;
