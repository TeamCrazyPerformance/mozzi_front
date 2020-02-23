import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectEditForm from "../../../components/ProjectEditForm/ProjectEditForm";
import Error from "../../../components/Error/Error";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import * as projectEditApi from "./projectEditApi";

const ProjectEdit = props => {
  const { history, match } = props;
  const { projectId } = match.params;

  const [title, setTitle] = useState("");
  const [member, setMember] = useState("");
  const [content, setContent] = useState("");

  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const handleTitleValue = event => setTitle(event.target.value);
  const handleMemberValue = event => setMember(event.target.value);
  const handleContentValue = event => setContent(event.target.value);

  const setStateApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setStateGetProjectInformationSuccess = () => {
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

  const setProjectInformation = projectInformation => {
    setTitle(projectInformation.title);
    setMember(projectInformation.member);
    setContent(projectInformation.content);
  };

  const getProjectInformation = () => {
    if (projectId) {
      projectEditApi.getProject({
        projectId,
        apiCallStart: setStateApiCallStart,
        apiCallSuccess: setStateGetProjectInformationSuccess,
        apiCallFailure: setStateGetProjectInformationFailure,
        setResponseToState: setProjectInformation
      });
    }
  };

  const handleSubmit = () => {
    const projectInformation = {
      projectId,
      title,
      member,
      content
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
        <Error />
      ) : (
        <ProjectEditForm
          titleValue={title}
          handleTitleValue={handleTitleValue}
          memberValue={member}
          handleMemberValue={handleMemberValue}
          contentValue={content}
          handleContentValue={handleContentValue}
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
