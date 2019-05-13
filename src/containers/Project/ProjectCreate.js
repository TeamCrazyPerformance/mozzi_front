import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectCreateForm from "../../components/ProjectComponents/ProjectCreateForm/ProjectCreateForm";

import * as projectManipulationActions from "../../redux/project/projectManipulation/actions";

const ProjectCreate = (props)=>{
  const [nameValue, setNameValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [isPublicValue, setIsPublicValue] = useState(false);
  
  const _handleNameValue = (event)=>{
    setNameValue(event.target.value);
  };
  
  const _handleContentValue = (event)=>{
    setContentValue(event.target.value);
  };
  
  const _handleIsPublicValue = (event)=>{
    setIsPublicValue(event.target.checked)
  };
  
  const _handleSubmit = (event)=>{
    event.preventDefault();
    
    const newProject = {
      name: nameValue,
      content : contentValue,
      isPublic : isPublicValue
    };
    
    props.postProject(newProject);
  };
  
  return (
    <ProjectCreateForm
      handleNameValue={_handleNameValue}
      handleContentValue={_handleContentValue}
      handleIsPublicValue={_handleIsPublicValue}
      handleSubmit={_handleSubmit}
      isPublic={isPublicValue}
    >
    </ProjectCreateForm>
  )
};

ProjectCreate.propTypes = {
  loadingState: PropTypes.objectOf(PropTypes.bool)
};

const _mapStateToProps = (state) => {
  const projectManipulation = state.ProjectManipulation;
  return {
    loadingState: {
      postProject: projectManipulation.loadingState.getProjects
    }
  }
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(projectManipulationActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(ProjectCreate);