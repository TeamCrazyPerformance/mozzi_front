import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ProjectInformation from "../../../components/ProjectInformation/ProjectInformation";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";
import * as projectApi from "./projectApi";

const Project = ({
  match: {
    params: { projectId }
  }
}) => {
  const [project, setProject] = useState({
    projectId: "",
    projectName: "",
    projectLeader: ""
  });
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setGetProjectResponse = ({ getProjectResponse }) =>
    setProject({ ...getProjectResponse.project });
  const setLoadingStateToTrue = () => setLoadingState(true);
  const setLoadingStateToFalse = () => setLoadingState(false);
  const setErrorToTrue = () => setError(true);
  const setErrorToFalse = () => setError(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingStateToTrue();
    setErrorToFalse();
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = () => {
    setLoadingStateToFalse();
    setErrorToFalse();
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingStateToFalse();
    setErrorToTrue();
  };

  const getProjectInformation = () => {
    projectApi.getProject({
      projectId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure,
      setResponseToState: setGetProjectResponse
    });
  };

  useEffect(getProjectInformation, []);

  return (
    <div>
      <div>{projectId} project</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <Error />
        ) : (
          <>
            <ProjectInformation projectInformation={project} />
            <Button
              variant="contained"
              color="primary"
              href={`/project/project/${projectId}/edit`}
            >
              Edit
            </Button>
          </>
        )}
      </LoadingSpinner>
    </div>
  );
};

Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Project;
