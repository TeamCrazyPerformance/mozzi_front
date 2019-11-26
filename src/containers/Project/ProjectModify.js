import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectModifyComponent from '../../components/ProjectComponents/ProjectModify/ProjectModify';

import * as projectModifyActions from '../../redux/project/projectManipulation/actions';

const ProjectModify = (props) => {
  // const [project, setProject] = useState(props.project);
  const { projectId } = props.match.params;
  const { project } = props;

  const handleNameValue = (event) => {
    const name = event.target.value;
    props.setProjectName({ name });
  };
  const handleContentValue = (event) => {
    const content = event.target.value;
    props.setProjectContent({ content });
  };
  const handleIsPublicValue = (event) => {
    const isPublic = event.target.checked;
    props.setProjectIsPublic({ isPublic });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.modifyProject({ projectId, project });
  };

  useEffect(() => {
  }, []);

  return (
    <ProjectModifyComponent
      handleNameValue={handleNameValue}
      handleIsPublicValue={handleIsPublicValue}
      handleContentValue={handleContentValue}
      handleSubmit={handleSubmit}
      deleteProject={() => { props.deleteProject({ projectId }); }}
      project={project}
    />
  );
};

const mapStateToProps = (state) => {
  const projectManipulation = state.ProjectManipulation;
  return {
    project: projectManipulation.project,
    loadingState: {
      modifyProject: projectManipulation.loadingState.modifyProject,
      deleteProject: projectManipulation.loadingState.deleteProject,
    },
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(projectModifyActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModify);
