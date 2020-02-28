import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const MajorValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;

  const majorValueCheck = targetValue => {
    const majorValueIsEmpty = targetValue === "";
    if (majorValueIsEmpty) return "Please fill major";

    const majorRegex = /^[가-힣+]*(전공)$/.test(targetValue);
    if (!majorRegex) return "Input XX전공 format";

    return "";
  };

  const handleMajorValue = event => {
    setValue(event.target.value);
    setValueErrMessage(majorValueCheck(event.target.value));
  };

  return (
    <TextField
      className="signup-form-component__form__input-box"
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
