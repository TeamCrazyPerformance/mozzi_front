import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectInformation from "../../../components/ProjectInformation/ProjectInformation";
import ProjectIssueList from "../../../components/ProjectIssueList/ProjectIssueList";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import * as projectApi from "./projectApi";

const Project = props => {
  const { match, history } = props;
  const { projectId } = match.params;

  const [project, setProject] = useState({
    projectId: "",
    projectName: "",
    projectLeader: "",
    projectContent: "",
    projectIssues: [{ issueId: "", issueName: "", issueContent: "" }]
  });
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = projectInformation => {
    setProject(projectInformation);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const getProjectInformation = () => {
    projectApi.getProject({
      projectId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  const moveToProjectEditPage = id => {
    history.push(`/project/project/${id}`);
  };

  useEffect(getProjectInformation, []);

  return (
    <div>
      <div>Project</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <>
            <ProjectInformation
              projectInformation={project}
              moveToProjectEditPage={moveToProjectEditPage}
            />
            <ProjectIssueList projectIssues={project.projectIssues} />
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
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Project;
