import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectsTable from "../../../components/ProjectsTable/ProjectsTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";
import * as projectsApi from "./ProjectsApi";

const Projects = props => {
  const { history } = props;
  const [projects, setProjects] = useState([
    {
      projectId: "",
      projectName: "",
      projectLeader: ""
    }
  ]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setGetProjectsResponse = ({ getProjectsResponse }) => {
    setProjects([...getProjectsResponse.projects]);
    setPage(getProjectsResponse.page);
    setCount(getProjectsResponse.count);
    setTotal(getProjectsResponse.total);
  };
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

  const moveToProjectPage = projectId => {
    history.push(`/project/project/${projectId}`);
  };

  const handlePageChange = (event, newPage = 0) => {
    projectsApi.getProjects({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure,
      setResponseToState: setGetProjectsResponse
    });
  };

  // Component did mount
  useEffect(handlePageChange, []);

  return (
    <div>
      <div>Projects</div>
      <LoadingSpinner loadingState={loadingState}>
        {error ? (
          <Error />
        ) : (
          <ProjectsTable
            data={projects}
            page={page}
            count={count}
            total={total}
            moveToProjectPage={moveToProjectPage}
            handlePageChange={handlePageChange}
          />
        )}
      </LoadingSpinner>
    </div>
  );
};

Projects.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Projects;
