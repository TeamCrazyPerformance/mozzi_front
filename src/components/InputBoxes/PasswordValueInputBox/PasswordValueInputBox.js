import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const PasswordValueInputBox = props => {
  const {
    value,
    setValue,
    valueErrMessage,
    setValueErrMessage,
    passwordConfirmValue,
    setPasswordConfirmValueErrMessage
  } = props;

  const passwordValueCheck = targetValue => {
    const passwordValueIsEmpty = targetValue === "";
    if (passwordValueIsEmpty) return "Please fill password";

    const passwordRegex = /^[A-Za-z0-9~!@#$%^&*()_+|<>?:{}+]*$/.test(
      targetValue
    );
    if (!passwordRegex)
      return "Use only alphabets, numbers and special characters";

    return "";
  };

  const handlePasswordValue = event => {
    setValue(event.target.value);
    setValueErrMessage(passwordValueCheck(event.target.value));
    setPasswordConfirmValueErrMessage(
      value === passwordConfirmValue
        ? ""
        : "Please check Password and Password confirm"
    );
  };

  return (
    <TextField
      className="signup-form-component__form__input-box"
      label="Password"
      type="password"
      value={value}
      onChange={handlePasswordValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

PasswordValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired,
  passwordConfirmValue: PropTypes.string.isRequired,
  setPasswordConfirmValueErrMessage: PropTypes.func.isRequired
};

export default PasswordValueInputBox;
