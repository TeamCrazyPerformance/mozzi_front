import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Build from "@material-ui/icons/Build";
import Delete from "@material-ui/icons/Delete";

const ProjectIssueList = props => {
  const { projectIssues } = props;

  return (
    <>
      <Typography variant="h6">Project Issues</Typography>
      {projectIssues ? (
        <div>
          <List dense>
            {projectIssues.map(element => (
              <ListItem key={element.issueName} button>
                <ListItemAvatar>
                  <Avatar>
                    <Build />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={element.issueName}
                  secondary={element.issueContent}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <Typography>There is no project issues</Typography>
      )}
    </>
  );
};

ProjectIssueList.propTypes = {
  projectIssues: PropTypes.arrayOf(
    PropTypes.shape({
      issueName: PropTypes.string.isRequired,
      issueContent: PropTypes.string.isRequired
    })
  )
};

ProjectIssueList.defaultProps = {
  projectIssues: []
};

export default ProjectIssueList;
