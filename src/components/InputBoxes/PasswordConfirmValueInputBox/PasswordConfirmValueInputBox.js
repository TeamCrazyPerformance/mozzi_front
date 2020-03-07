import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const PasswordConfirmValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const PasswordConfirmValueInputBox = props => {
  const {
    value,
    setValue,
    valueErrMessage,
    setValueErrMessage,
    passwordValue
  } = props;
  const { inputBoxClassName } = PasswordConfirmValueInputBoxStyles();

  const passwordConfirmValueCheck = targetValue => {
    const passwordConfirmValueIsEmpty = targetValue === "";
    if (passwordConfirmValueIsEmpty) return "Please fill password confirm";

    const passwordConfirmValueIsSame = targetValue === passwordValue;
    if (!passwordConfirmValueIsSame)
      return "Please check Password and Password confirm";

    return "";
  };

  const handlePasswordConfirmValue = event => {
    setValue(event.target.value);
    setValueErrMessage(passwordConfirmValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Password confirm"
      type="password"
      value={value}
      onChange={handlePasswordConfirmValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

PasswordConfirmValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired,
  passwordValue: PropTypes.string.isRequired
};

export default PasswordConfirmValueInputBox;
