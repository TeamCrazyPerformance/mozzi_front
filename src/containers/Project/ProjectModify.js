import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectModifyComponent from '../../components/ProjectComponents/ProjectModify/ProjectModify';

import * as projectModifyActions from '../../redux/projectManipultation/actions';

const ProjectModify = (props) => {
  // const [project, setProject] = useState({});
  const [nameValue, setNameValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [isPublicValue, setIsPublicValue] = useState('');
  
  useEffect(()=>{
  });
  
  return(
    <ProjectModifyComponent
      handleNameValue={setNameValue}
      handleIsPublicValue={setIsPublicValue}
      handleContentValue={setContentValue}
      deleteProject={()=>{}}
      project={props.project}/>
  )
};

const mapStateToProps = state => {
  const projectManipulation = state.ProjectManipulation;
  return {
    project : projectManipulation.project,
    loadingState: {
      modifyProject: projectManipulation.loadingState.modifyProject,
      deleteProject: projectManipulation.loadingState.deleteProject,
    },
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(projectModifyActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModify);
