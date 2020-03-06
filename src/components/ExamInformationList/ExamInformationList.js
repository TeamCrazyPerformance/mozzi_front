import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { AccessibilityNew } from "@material-ui/icons";

const createProjectInformationRow = (icon, dataName, data) => {
  return { icon, dataName, data };
};

const createTableRows = examInformation => [
  createProjectInformationRow(
    AccessibilityNew,
    "Author id",
    examInformation.authorId
  ),
  createProjectInformationRow(AccessibilityNew, "Year", examInformation.year),
  createProjectInformationRow(AccessibilityNew, "Major", examInformation.major),
  createProjectInformationRow(AccessibilityNew, "Grade", examInformation.grade),
  createProjectInformationRow(
    AccessibilityNew,
    "Semester",
    examInformation.semester
  ),
  createProjectInformationRow(AccessibilityNew, "Term", examInformation.term),
  createProjectInformationRow(
    AccessibilityNew,
    "Lecture name",
    examInformation.name
  ),
  createProjectInformationRow(
    AccessibilityNew,
    "Professor",
    examInformation.professor
  ),
  createProjectInformationRow(
    AccessibilityNew,
    "Content",
    examInformation.content
  )
];

const projectInformationStyles = makeStyles(theme => ({
  rootClassName: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "10px"
  }
}));

const ExamInformationList = props => {
  const { rootClassName } = projectInformationStyles();
  const { examInformation } = props;
  const tableRow = createTableRows(examInformation);

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

ExamInformationList.propTypes = {
  examInformation: PropTypes.shape({
    examId: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    semester: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    professor: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default ExamInformationList;
