import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { AccessibilityNew, Description } from "@material-ui/icons";

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
    AccessibilityNew,
    "Project dicription",
    projectInformation.projectContent
  )
];

const projectInformationStyles = makeStyles(theme => ({
  rootClassName: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "10px"
  }
}));

const ProjectInformation = props => {
  const { rootClassName } = projectInformationStyles();
  const { projectInformation } = props;
  const tableRow = createTableRows(projectInformation);

  return (
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
  );
};

ProjectInformation.propTypes = {
  projectInformation: PropTypes.shape({
    projectId: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    projectLeader: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectInformation;
