import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProjectInformation from "../../../components/ProjectInformation/ProjectInformation";
import ProjectIssueList from "../../../components/ProjectIssueList/ProjectIssueList";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import * as projectApi from "./projectApi";

const Project = props => {
  const { myId, match, history } = props;
  const { projectId } = match.params;
  const [project, setProject] = useState({
    projectId: "",
    projectName: "",
    projectLeader: "",
    projectContent: ""
  });
  const [projectIssues, setProjectIssues] = useState([
    { issueId: "", issueName: "", issueContent: "" }
  ]);
  const [selfIdentification, setSelfIdentification] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = response => {
    setProject(response.project);
    setProjectIssues([...response.project.projectIssues]);
    // Check self identification for edit and delete button.
    if (response.project.projectLeader === myId) setSelfIdentification(true);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const getProject = () => {
    projectApi.getProject({
      projectId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  const deleteProject = () => {
    projectApi.deleteProject({
      projectId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: () => history.replace("/project/projects"),
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  const deleteIssue = issueId => {
    projectApi.deleteIssue({
      issueId,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: getProject,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
    });
  };

  useEffect(getProject, []);

  return (
    <div>
      <div>Project</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <ErrorPage />
        ) : (
          <>
            <ProjectInformation
              selfIdentification={selfIdentification}
              projectInformation={project}
              deleteProject={deleteProject}
              projectInformationEditPageUrl={`/project/project/${projectId}/edit`}
            />
            <ProjectIssueList
              selfIdentification={selfIdentification}
              projectIssues={projectIssues}
              deleteIssue={deleteIssue}
            />
          </>
        )}
      </LoadingSpinner>
    </div>
  );
};

Project.propTypes = {
  myId: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => {
  const { auth } = state;
  return { myId: auth.userId };
};

export default connect(mapStateToProps)(Project);
