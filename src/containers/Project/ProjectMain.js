import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectTable from "../../components/ProjectComponents/ProjectTable/ProjectTable";

import * as projectActions from "../../redux/project/actions"

const ProjectMain = (props) => {
  //declare state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const _handleChangePage = (event, page) => {
    setPage(page);
  };
  
  const _handleChangeRowsPerPage = event => {
    setRowsPerPage(Number(event.target.value));
  };
  
  useEffect(()=>{
    //when component did mount
    props.getProjects();
  },[]);
  
  return(
    <ProjectTable
      projects={props.projects}
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={_handleChangePage}
      handleChangeRowsPerPage={_handleChangeRowsPerPage}
    />
  )
};

ProjectMain.propTypes = {
  projects : PropTypes.array.isRequired,
  loadingState: PropTypes.objectOf(PropTypes.bool)
};


const _mapStateToProps = (state) => {
  const project = state.Project;
  return {
    projects : project.projects,
    loadingState : {
      getProjects : project.loadingState.getProjects
    }
  }
};

const _mapDispatchToProps = (dispatch) => {
  return bindActionCreators(projectActions, dispatch);
};

export default connect(_mapStateToProps, _mapDispatchToProps)(ProjectMain);