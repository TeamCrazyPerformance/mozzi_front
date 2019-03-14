import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectTable from "../../components/ProjectComponents/ProjectTable/ProjectTable";

import * as projectActions from "../../redux/project/actions"

const Project = ({projects}) => {
  //declare state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const _handleChangePage = (event, page) => {
    setPage(page);
  };
  
  const _handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };
  
  useEffect(()=>{
    //when component did mount
    projectActions.getProjects();
  });
  
  return(
    <ProjectTable
      projects={projects}
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={_handleChangePage}
      handleChangeRowsPerPage={_handleChangeRowsPerPage}
    />
  )
};

Project.propTypes = {
  projects : PropTypes.array.isRequired
};


const _mapStateToProps = (state) => {
  const project = state.Project;
  return {
    projects : project.projects
  }
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(projectActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(Project);