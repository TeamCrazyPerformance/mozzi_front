import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import UserInformationList from "../../../components/UserInformationList/UserInformationList";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import * as userInformationApi from "./UserInformationApi";

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

  const setLoadingStateAndErrorWhenApiCallSuccess = responseUserInformation => {
    setUserInformation(responseUserInformation);
    if (responseUserInformation.id === myId) setSelfIdentification(true);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const getUserInformation = () => {
    userInformationApi.getUserInformation({
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
          <UserInformationList userInformation={userInformation} />
        )}
        {selfIdentification ? (
          <div className="edit-button-wrapper">
            <Button
              className="edit-button-wrapper__edit-button"
              variant="contained"
              color="primary"
              component={Link}
              to={`/user/${userId}/edit`}
            >
              Edit
            </Button>
          </div>
        ) : (
          <></>
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
