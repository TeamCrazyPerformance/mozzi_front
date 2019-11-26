import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectTable from '../../components/ProjectComponents/ProjectTable/ProjectTable';

import * as projectMainActions from '../../redux/project/projectMain/actions';

const ProjectMain = (props) => {
  // declare state
  const {
    page, limit, total, projects, getProjects,
  } = props;

  const handleChangePage = (event, pageToChange) => {
    getProjects(pageToChange, limit);
  };

  const handleChangeRowsPerPage = (event) => {
    getProjects(page, event.target.value);
  };

  useEffect(() => {
    // when component did mount
    getProjects(page, limit);
  }, []);

  return (
    <ProjectTable
      projects={projects}
      page={page}
      limit={limit}
      total={total}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

ProjectMain.propTypes = {
  projects: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  loadingState: PropTypes.objectOf(PropTypes.bool),
};


const mapStateToProps = (state) => {
  const projectMain = state.ProjectMain;
  return {
    projects: projectMain.projects,
    page: projectMain.page,
    limit: projectMain.limit,
    total: projectMain.total,
    loadingState: {
      getProjects: projectMain.loadingState.getProjects,
    },
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(projectMainActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMain);
