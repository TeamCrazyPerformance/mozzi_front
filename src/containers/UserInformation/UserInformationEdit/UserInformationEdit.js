import React from "react";
import UserInformationEditForm from "../../../components/UserInformationEditForm/UserInformationEditForm";
import UserPasswordEditForm from "../../../components/UserPasswordEditForm/UserPasswordEditForm";
import UserWithdrawalForm from "../../../components/UserWithdrawalForm/UserWithdrawalForm";

const UserInformationEdit = () => {
  return (
    <div>
      <UserInformationEditForm />
      <UserPasswordEditForm />
      <UserWithdrawalForm />
    </div>
  );
};

export default UserInformationEdit;
