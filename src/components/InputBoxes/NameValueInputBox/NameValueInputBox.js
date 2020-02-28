import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const NameValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;

  const nameValueCheck = targetValue => {
    const nameValueIsEmpty = targetValue === "";
    if (nameValueIsEmpty) return "Please fill name";

    const nameRegex = /^[가-힣a-zA-Z]*$/.test(targetValue);
    if (!nameRegex) return "Use only alphabets or korean";

    return "";
  };
  const handleNameValue = event => {
    setValue(event.target.value);
    setValueErrMessage(nameValueCheck(event.target.value));
  };

  return (
    <TextField
      className="signup-form-component__form__input-box"
      label="Name"
      type="string"
      value={value}
      onChange={handleNameValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

NameValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default NameValueInputBox;
