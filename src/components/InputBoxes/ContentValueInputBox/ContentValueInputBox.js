import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const ContentValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const ContentValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage, rows } = props;
  const { inputBoxClassName } = ContentValueInputBoxStyles();

  const contentValueCheck = targetValue => {
    const contentValueIsEmpty = targetValue === "";
    if (contentValueIsEmpty) return "Please fill content";

    return "";
  };
  const handleNameValue = event => {
    setValue(event.target.value);
    setValueErrMessage(contentValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Content"
      type="string"
      value={value}
      onChange={handleNameValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      multiline
      rows={rows}
      fullWidth
    />
  );
};

ContentValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired,
  rows: PropTypes.string
};

ContentValueInputBox.defaultProps = {
  rows: "20"
};

export default ContentValueInputBox;
