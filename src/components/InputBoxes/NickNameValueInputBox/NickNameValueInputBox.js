import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const NickNameValueInputBoxStyles = makeStyles(() => ({
  inputBoxClassName: {
    paddingBottom: "10px"
  }
}));

const NickNameValueInputBox = props => {
  const { value, setValue, valueErrMessage, setValueErrMessage } = props;
  const { inputBoxClassName } = NickNameValueInputBoxStyles();

  const nickNameValueCheck = targetValue => {
    const nickNameValueIsEmpty = targetValue === "";
    if (nickNameValueIsEmpty) return "Please fill nick name";

    const nickNameRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9~!@#$%^&*()_+|<>?:{}+]*$/.test(
      targetValue
    );
    if (!nickNameRegex)
      return "Use only korean, alphabets, numbers and special characters";

    return "";
  };
  const handleNickNameValue = event => {
    setValue(event.target.value);
    setValueErrMessage(nickNameValueCheck(event.target.value));
  };

  return (
    <TextField
      className={`${inputBoxClassName}`}
      label="Nickname"
      type="string"
      value={value}
      onChange={handleNickNameValue}
      error={!!valueErrMessage}
      helperText={valueErrMessage || " "}
      fullWidth
    />
  );
};

NickNameValueInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueErrMessage: PropTypes.string.isRequired,
  setValueErrMessage: PropTypes.func.isRequired
};

export default NickNameValueInputBox;
