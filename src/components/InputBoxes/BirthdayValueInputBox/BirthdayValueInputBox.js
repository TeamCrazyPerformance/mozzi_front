import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const BirthdayValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;

  const birthdayValueCheck = targetValue => {
    const birthdayValueIsEmpty = targetValue === "";
    if (birthdayValueIsEmpty) return "Please fill birthday";

    const birthdayRegex = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(
      targetValue
    );
    if (!birthdayRegex) return "Input YYMMDD format";

    return "";
  };

  const handleBirthdayValue = event => {
    setValue(event.target.value);
    setValueErrMessage(birthdayValueCheck(event.target.value));
  };

  return (
    <TextField
      className="signup-form-component__form__input-box"
      label="Birthday"
      type="string"
      value={value}
      onChange={handleBirthdayValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

BirthdayValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default BirthdayValueInputBox;
