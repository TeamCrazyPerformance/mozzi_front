import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

// import './ProjectDescription.css';

const ProjectDescription = ({ projectId, project }) => (
  <div className="project-view-component">
    <div className="project-view-component__project-name-wrapper">
      제목: {project.name}
    </div>

    <div className="project-view-component__project-content-wrapper">
      내용: {project.content}
    </div>

    <div className="project-view-component__project-member-list-wrapper">
      멤버: {project.members}
    </div>

    <Link
      to={`/project/${projectId}/issue`}
      className="project-view-component__issues-link-button"
    >
      <Button variant="contained">이슈 보기</Button>
    </Link>

    <div className="project-view-component__manipulate-buttons-wrapper">
      <div className="project-view-component__modify-button-wrapper">
        <Link to={`/project/${projectId}/modify`}>
          <Button variant="contained" color="primary">
            수정
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

ProjectDescription.propTypes = {
  projectId: PropTypes.string.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired
  }),
  handleProjectDelete: PropTypes.func.isRequired
};

export default ProjectDescription;
