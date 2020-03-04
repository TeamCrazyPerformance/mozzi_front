import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./UserWithdrawalForm.css";

const userWithdrawalFormStyles = makeStyles(() => ({
  userWithdrawalButtonTitle: {
    textAlign: "center",
    fontSize: "2rem",
    color: "red"
  },
  userWithdrawalButtonWrapper: {
    position: "relative",
    margin: "auto",
    marginTop: "80px",
    marginBottom: "100px",
    width: "250px",
    height: "80px"
  }
}));

const UserWithdrawalForm = () => {
  const {
    userWithdrawalButtonTitle,
    userWithdrawalButtonWrapper
  } = userWithdrawalFormStyles();

  return (
    <>
      <div className={userWithdrawalButtonTitle}>Withdrawal button</div>
      <div className={userWithdrawalButtonWrapper}>
        <div className="button" />
      </div>
    </>
  );
};

export default UserWithdrawalForm;
