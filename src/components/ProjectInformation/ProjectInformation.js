import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { AccessibilityNew, Description, MenuBook } from "@material-ui/icons";

const createProjectInformationRow = (icon, dataName, data) => {
  return { icon, dataName, data };
};

const createTableRows = projectInformation => [
  createProjectInformationRow(
    Description,
    "Project Name",
    projectInformation.projectName
  ),
  createProjectInformationRow(
    AccessibilityNew,
    "Project Leader",
    projectInformation.projectLeader
  ),
  createProjectInformationRow(
    MenuBook,
    "Project dicription",
    projectInformation.projectContent
  )
];

const projectInformationStyles = makeStyles(theme => ({
  rootClassName: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "10px"
  },
  buttonWrapperClassName: {
    textAlign: "right",
    marginBottom: "10px"
  },
  deleteButtonClassName: {
    marginRight: "10px"
  }
}));

const ProjectInformation = props => {
  const {
    rootClassName,
    buttonWrapperClassName,
    deleteButtonClassName
  } = projectInformationStyles();
  const {
    projectInformation,
    selfIdentification,
    deleteProject,
    projectInformationEditPageUrl
  } = props;
  const tableRow = createTableRows(projectInformation);

  return (
    <>
      <List className={rootClassName}>
        {tableRow.map(row => (
          <Fragment key={row.dataName}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <row.icon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={row.dataName} secondary={row.data} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
      {selfIdentification ? (
        <div className={`button-wrapper ${buttonWrapperClassName}`}>
          <Button
            className={`button-wrapper__delete-button ${deleteButtonClassName}`}
            variant="contained"
            color="primary"
            onClick={() => deleteProject()}
          >
            Delete
          </Button>
          <Button
            className="button-wrapper__edit-button"
            variant="contained"
            color="primary"
            component={Link}
            to={projectInformationEditPageUrl}
          >
            Edit
          </Button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

ProjectInformation.propTypes = {
  projectInformation: PropTypes.shape({
    projectId: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    projectLeader: PropTypes.string.isRequired
  }).isRequired,
  selfIdentification: PropTypes.bool.isRequired,
  deleteProject: PropTypes.func.isRequired,
  projectInformationEditPageUrl: PropTypes.string.isRequired
};

export default ProjectInformation;
