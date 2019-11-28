import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProjectDescription from "../../components/ProjectComponents/ProjectDescription/ProjectDescription";
import FlexBox from "../../components/FlexBox/FlexBox";

import * as projectViewActions from "../../redux/project/projectView/actions";

const ProjectView = props => {
  const { projectId } = props.match.params;
  useEffect(() => {
    console.log(projectId);
    props.getProject(projectId);
    props.getIssues(projectId);
  }, [projectId, props]);

  return (
    <FlexBox>
      <ProjectDescription projectId={projectId} project={props.project} />
    </FlexBox>
  );
};

ProjectView.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
    members: PropTypes.string
  }).isRequired,
  loadingState: PropTypes.objectOf(PropTypes.bool).isRequired
};

const mapStateToProps = state => {
  const projectView = state.ProjectView;
  return {
    project: projectView.project,
    issues: projectView.issues,
    loadingState: {
      getProjects: projectView.loadingState.getProjects
    }
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(projectViewActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
