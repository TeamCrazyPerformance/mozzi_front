import React, { useEffect, useState } from "react";
import ProjectsTable from "../../../components/ProjectsTable/ProjectsTable";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Error from "../../../components/Error/Error";

const Projects = () => {
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

  const handlePageChange = (event, newPage = 0) => {};

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
            handlePageChange={handlePageChange}
          />
        )}
      </LoadingSpinner>
    </div>
  );
};

export default Projects;
