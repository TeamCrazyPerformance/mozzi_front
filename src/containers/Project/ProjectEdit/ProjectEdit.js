import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectEditForm from "../../../components/ProjectEditForm/ProjectEditForm";

const ProjectEdit = props => {
  const { history, match } = props;
  const { projectId } = match.params;

  const getProjectInformation = () => {
    // get api call
  };

  // Component did mount.
  useEffect(projectId ? getProjectInformation : () => {}, []);

  return <ProjectEditForm />;
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
