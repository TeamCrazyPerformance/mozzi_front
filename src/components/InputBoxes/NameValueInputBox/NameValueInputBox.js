import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const NameValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const NameValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage, label } = props;
  const { inputBoxClassName } = NameValueInputBoxStyles();

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
      className={`${inputBoxClassName}`}
      label={label}
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
  setValueErrMessage: PropTypes.func.isRequired,
  label: PropTypes.string
};

NameValueInputBox.defaultProps = {
  label: "Name"
};

export default NameValueInputBox;
