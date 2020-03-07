import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectsTable from "../../../components/ProjectsTable/ProjectsTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";
import getProjects from "./projectsApi";

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
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);

  const setLoadingStateAndErrorWhenApiCallStart = () => {
    setLoadingState(true);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallSuccess = response => {
    setProjects([...response.projects]);
    setPage(response.page);
    setCount(response.total);
    setRowsPerPage(response.count);
    setLoadingState(false);
    setError(false);
  };

  const setLoadingStateAndErrorWhenApiCallFailure = () => {
    setLoadingState(false);
    setError(true);
  };

  const moveToProjectPage = projectId => {
    history.push(`/project/project/${projectId}`);
  };

  const handlePageChange = (event, newPage = 0) => {
    getProjects({
      page: newPage,
      apiCallStart: setLoadingStateAndErrorWhenApiCallStart,
      apiCallSuccess: setLoadingStateAndErrorWhenApiCallSuccess,
      apiCallFailure: setLoadingStateAndErrorWhenApiCallFailure
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
            rowsPerPage={rowsPerPage}
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
