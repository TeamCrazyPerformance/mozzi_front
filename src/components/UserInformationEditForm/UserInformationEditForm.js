import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import NickNameValueInputBox from "../InputBoxes/NickNameValueInputBox/NickNameValueInputBox";
import EmailValueInputBox from "../InputBoxes/EmailValueInputBox/EmailValueInputBox";
import PhoneNumberValueInputBox from "../InputBoxes/PhoneNumberValueInputBox/PhoneNumberValueInputBox";

const userInformationEditFormStyles = makeStyles(() => ({
  userInformationEditFormWrapperClassName: {
    width: "50vw",
    marginBottom: "20px"
  }
}));

const UserInformationEditForm = props => {
  const { userInformationData, handleSubmit } = props;
  const {
    userInformationEditFormWrapperClassName
  } = userInformationEditFormStyles();

  const handleUserInformationEditSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className={`${userInformationEditFormWrapperClassName}`}>
      <form onSubmit={handleUserInformationEditSubmit}>
        <EmailValueInputBox
          value={userInformationData.email.value}
          setValue={userInformationData.email.setValue}
          valueErrMessage={userInformationData.email.valueErrMessage}
          setValueErrMessage={userInformationData.email.setValueErrMessage}
        />
        <NickNameValueInputBox
          value={userInformationData.nickName.value}
          setValue={userInformationData.nickName.setValue}
          valueErrMessage={userInformationData.nickName.valueErrMessage}
          setValueErrMessage={userInformationData.nickName.setValueErrMessage}
        />
        <PhoneNumberValueInputBox
          value={userInformationData.phoneNum.value}
          setValue={userInformationData.phoneNum.setValue}
          valueErrMessage={userInformationData.phoneNum.valueErrMessage}
          setValueErrMessage={userInformationData.phoneNum.setValueErrMessage}
        />
        <div>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Information Edit
          </Button>
        </div>
      </form>
    </div>
  );
};

UserInformationEditForm.propTypes = {
  userInformationData: PropTypes.shape({
    allow: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    email: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    nickName: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    phoneNum: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    })
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default UserInformationEditForm;
