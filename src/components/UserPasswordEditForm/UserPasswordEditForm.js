import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import PasswordValueInputBox from "../InputBoxes/PasswordValueInputBox/PasswordValueInputBox";
import PasswordConfirmValueInputBox from "../InputBoxes/PasswordConfirmValueInputBox/PasswordConfirmValueInputBox";

const userPasswordEditFormStyles = makeStyles(() => ({
  userPasswordEditFormWrapperClassName: {
    width: "50vw",
    marginBottom: "20px"
  }
}));

const UserPasswordEditForm = props => {
  const { userPasswordData, handleSubmit } = props;
  const { userPasswordEditFormWrapperClassName } = userPasswordEditFormStyles();

  const handleUserInformationEditSubmit = event => {
    // Prevent browers refresh.
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className={`${userPasswordEditFormWrapperClassName}`}>
      <form onSubmit={handleUserInformationEditSubmit}>
        <PasswordValueInputBox
          label="Current password"
          value={userPasswordData.currentPassword.value}
          setValue={userPasswordData.currentPassword.setValue}
          valueErrMessage={userPasswordData.currentPassword.valueErrMessage}
          setValueErrMessage={
            userPasswordData.currentPassword.setValueErrMessage
          }
        />
        <PasswordValueInputBox
          label="New password"
          value={userPasswordData.newPassword.value}
          setValue={userPasswordData.newPassword.setValue}
          valueErrMessage={userPasswordData.newPassword.valueErrMessage}
          setValueErrMessage={userPasswordData.newPassword.setValueErrMessage}
          passwordConfirmValue={userPasswordData.newPassword.newPasswordConfirm}
          setPasswordConfirmValueErrMessage={
            userPasswordData.newPassword.setNewPasswordConfirmErrMessage
          }
        />
        <PasswordConfirmValueInputBox
          label="New password confirm"
          value={userPasswordData.newPasswordConfirm.value}
          setValue={userPasswordData.newPasswordConfirm.setValue}
          valueErrMessage={userPasswordData.newPasswordConfirm.valueErrMessage}
          setValueErrMessage={
            userPasswordData.newPasswordConfirm.setValueErrMessage
          }
          passwordValue={userPasswordData.newPasswordConfirm.newPassword}
        />
        <div>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Password Edit
          </Button>
        </div>
      </form>
    </div>
  );
};

UserPasswordEditForm.propTypes = {
  userPasswordData: PropTypes.shape({
    currentPassword: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired
    }),
    newPassword: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired,
      newPasswordConfirm: PropTypes.string.isRequired,
      setNewPasswordConfirmErrMessage: PropTypes.func.isRequired
    }),
    newPasswordConfirm: PropTypes.shape({
      value: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      valueErrMessage: PropTypes.string.isRequired,
      setValueErrMessage: PropTypes.func.isRequired,
      newPassword: PropTypes.string.isRequired
    })
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default UserPasswordEditForm;
