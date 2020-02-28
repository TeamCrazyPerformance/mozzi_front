import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const PhoneNumberValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;

  const phoneNumValueCheck = targetValue => {
    const phoneNumValueIsEmpty = targetValue === "";
    if (phoneNumValueIsEmpty) return "Please fill phone number";

    const phoneNumRegex = /^[0-9]{11}$/.test(targetValue);
    if (!phoneNumRegex) return "Input phone number without hyphen";

    return "";
  };

  const handlePhoneNumValue = event => {
    setValue(event.target.value);
    setValueErrMessage(phoneNumValueCheck(event.target.value));
  };

  return (
    <TextField
      className="signup-form-component__form__input-box"
      label="Phone number"
      type="string"
      value={value}
      onChange={handlePhoneNumValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

PhoneNumberValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default PhoneNumberValueInputBox;
