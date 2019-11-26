import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IssueTable from '../../components/ProjectComponents/IssueTable/IssueTable';

import * as issueMainActions from '../../redux/project/issueMain/actions';

const IssueMain = (props) => {
  const { projectId } = props.match.params;

  useEffect(() => {
    props.getIssues(projectId);
  });

  return (
    <IssueTable projectId={projectId} projectIssues={props.issues} />
  );
};

const mapStateToProps = (state) => {
  const issueMain = state.IssueMain;
  return {
    issues: issueMain.issues,
    loadingState: {
      getIssues: issueMain.loadingState.getIssues,
    },
  };
};

const mapSDispatchToProps = (dispatch) => bindActionCreators(issueMainActions, dispatch);

export default connect(mapStateToProps, mapSDispatchToProps)(IssueMain);
