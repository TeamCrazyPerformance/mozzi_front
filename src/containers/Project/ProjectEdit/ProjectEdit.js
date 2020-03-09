import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectEditForm from "../../../components/ProjectEditForm/ProjectEditForm";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import * as projectEditApi from "./projectEditApi";

const ProjectEdit = props => {
  const { history, match } = props;
  const { projectId } = match.params;

  const [projectName, setProjectName] = useState("");
  const [projectNameErrMessage, setProjectNameErrMessage] = useState("");

  const [projectLeader, setProjectLeader] = useState("");
  const [projectLeaderErrMessage, setProjectLeaderErrMessage] = useState("");

  const [projectContent, setProjectContent] = useState("");
  const [projectContentErrMessage, setProjectContentErrMessage] = useState("");

  const projectFormData = {
    projectName: {
      value: projectName,
      setValue: setProjectName,
      valueErrMessage: projectNameErrMessage,
      setValueErrMessage: setProjectNameErrMessage
    },
    projectLeader: {
      value: projectLeader,
      setValue: setProjectLeader,
      valueErrMessage: projectLeaderErrMessage,
      setValueErrMessage: setProjectLeaderErrMessage
    },
    projectContent: {
      value: projectContent,
      setValue: setProjectContent,
      valueErrMessage: projectContentErrMessage,
      setValueErrMessage: setProjectContentErrMessage
    }
  };

  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setStateApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setStateGetProjectInformationSuccess = response => {
    setProjectName(response.project.projectName);
    setProjectLeader(response.project.projectLeader);
    setProjectContent(response.project.projectContent);
    setLoadingState(false);
    setError(false);
  };

  const setStateGetProjectInformationFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const setStateHandleSubmitSuccess = () => {
    setLoadingState(false);
    setError(false);

    if (projectId) {
      history.push(`/project/project/${projectId}`);
    } else {
      history.push("/project/projects");
    }
  };

  const setStateHandleSubmitFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const getProjectInformation = () => {
    if (projectId) {
      projectEditApi.getProject({
        projectId,
        apiCallStart: setStateApiCallStart,
        apiCallSuccess: setStateGetProjectInformationSuccess,
        apiCallFailure: setStateGetProjectInformationFailure
      });
    }
  };

  const handleSubmit = () => {
    const projectInformation = {
      projectId,
      projectName,
      projectLeader,
      projectContent
    };

    if (projectId) {
      projectEditApi.putProject({
        projectInformation,
        apiCallStart: setStateApiCallStart,
        apiCallSuccess: setStateHandleSubmitSuccess,
        apiCallFailure: setStateHandleSubmitFailure
      });
    } else {
      projectEditApi.postProject({
        projectInformation,
        apiCallStart: setStateApiCallStart,
        apiCallSuccess: setStateHandleSubmitSuccess,
        apiCallFailure: setStateHandleSubmitFailure
      });
    }
  };

  // Component did mount.
  useEffect(getProjectInformation, []);

  return (
    <LoadingSpinner loadingState={loadingState}>
      {error ? (
        <ErrorPage />
      ) : (
        <ProjectEditForm
          projectFormData={projectFormData}
          handleSubmit={handleSubmit}
        />
      )}
    </LoadingSpinner>
  );
};

ProjectEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string
    })
  })
};

ProjectEdit.defaultProps = {
  match: { params: { projectId: "" } }
};

export default ProjectEdit;
