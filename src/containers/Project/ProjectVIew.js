import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectDescription from "../../components/ProjectComponents/ProjectDescription/ProjectDescription";
import IssueTable from "../../components/ProjectComponents/IssueTable/IssueTable";
import FlexBox from "../../components/LayoutComponents/FlexBox/FlexBox";

import * as projectViewActions from "../../redux/projectView/actions"

const ProjectView = (props) => {
  const [issues,setIssues] = useState([]);
  
  useEffect(() => {
    props.getProject(props.projectId);
    props.getIssues(props.projectId);
  },[]);
  
  return(
    <FlexBox>
      <ProjectDescription project={props.project}/>
      <IssueTable projectIssues={issues}/>
    </FlexBox>
  )
};

ProjectView.propTypes = {
  project : PropTypes.shape({
    name : PropTypes.string,
    content : PropTypes.string,
    members : PropTypes.string
  }).isRequired,
  loadingState : PropTypes.objectOf(PropTypes.bool).isRequired
};

const _mapStateToProps = (state) => {
  const projectView = state.ProjectView;
  return {
    project : projectView.project,
    issues : projectView.issues,
    loadingState : {
      getProjects : projectView.loadingState.getProjects,
      getIssues : projectView.loadingState.getIssues
    }
  }
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(projectViewActions, dispatch);
};

export default connect(_mapStateToProps,_mapDispatchToProps)(ProjectView);