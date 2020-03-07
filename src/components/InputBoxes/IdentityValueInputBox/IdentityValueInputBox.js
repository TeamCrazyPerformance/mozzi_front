import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const IdentityValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const IdentityValueInputBox = props => {
  const {
    value,
    setValue,
    valueErrMessage,
    setValueErrMessage,
    identityValueDuplicateCheck
  } = props;
  const { inputBoxClassName } = IdentityValueInputBoxStyles();

  const identityValueCheck = async targetValue => {
    const identityValueIsEmpty = targetValue === "";
    if (identityValueIsEmpty) return "Please fill ID";

    const identityRegex = /^[A-Za-z0-9+]*$/.test(targetValue);
    if (!identityRegex) return "Use only alphabets and numbers";

    const identityValueCanUse = await identityValueDuplicateCheck({
      identityValue: targetValue
    });
    if (!identityValueCanUse) return "This ID is already in use.";

    return "";
  };

  const handleIdentityValue = async event => {
    setValue(event.target.value);
    setValueErrMessage("Please wait");
    setValueErrMessage(await identityValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="ID"
      type="string"
      value={value}
      onChange={handleIdentityValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

IdentityValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired,
  identityValueDuplicateCheck: PropTypes.func.isRequired
};

export default IdentityValueInputBox;
