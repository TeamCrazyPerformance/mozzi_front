import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserInformationList from "../../../components/UserInformationList/UserInformationList";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import getUser from "./UserInformationApi";

const UserInformation = props => {
  const { myId, match } = props;
  const { userId } = match.params;
  const [userInformation, setUserInformation] = useState({
    id: "",
    name: "",
    nickname: "",
    role: "",
    stdNumber: "",
    phoneNum: "",
    email: "",
    major: "",
    birthday: "",
    createAt: "",
    allow: []
  });
  const [selfIdentification, setSelfIdentification] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = response => {
    setUserInformation(response.user);
    // Check self identification for edit and delete button.
    if (response.user.id === myId) setSelfIdentification(true);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const getUserInformation = () => {
    getUser({
      userId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  useEffect(getUserInformation, []);

  return (
    <div>
      <div>User information</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <UserInformationList
            userInformation={userInformation}
            selfIdentification={selfIdentification}
            userInformationEditPageUrl={`/user/${myId}/edit`}
          />
        )}
      </LoadingSpinner>
    </div>
  );
};

UserInformation.propTypes = {
  myId: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const mapStateToProps = state => {
  const { auth } = state;
  return { myId: auth.userId };
};

export default connect(mapStateToProps)(UserInformation);
