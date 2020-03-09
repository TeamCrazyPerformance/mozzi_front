import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import {
  AccessibilityNew,
  CalendarToday,
  Computer,
  School,
  Today,
  TextFields,
  MenuBook,
  EmojiPeople,
  LibraryBooks
} from "@material-ui/icons";

const createProjectInformationRow = (icon, dataName, data) => {
  return { icon, dataName, data };
};

const createTableRows = examInformation => [
  createProjectInformationRow(
    AccessibilityNew,
    "Author id",
    examInformation.authorId
  ),
  createProjectInformationRow(CalendarToday, "Year", examInformation.year),
  createProjectInformationRow(Computer, "Major", examInformation.major),
  createProjectInformationRow(School, "Grade", examInformation.grade),
  createProjectInformationRow(Today, "Semester", examInformation.semester),
  createProjectInformationRow(TextFields, "Term", examInformation.term),
  createProjectInformationRow(MenuBook, "Lecture name", examInformation.name),
  createProjectInformationRow(
    EmojiPeople,
    "Professor",
    examInformation.professor
  ),
  createProjectInformationRow(LibraryBooks, "Content", examInformation.content)
];

const projectInformationStyles = makeStyles(theme => ({
  rootClassName: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: "10px"
  },
  buttonWrapperClassName: {
    textAlign: "right"
  },
  deleteButtonClassName: {
    marginRight: "10px"
  }
}));

const ExamInformationList = props => {
  const {
    rootClassName,
    buttonWrapperClassName,
    deleteButtonClassName
  } = projectInformationStyles();
  const {
    examInformation,
    selfIdentification,
    deleteExam,
    examInformationEditPageUrl
  } = props;
  const tableRow = createTableRows(examInformation);

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
            onClick={() => deleteExam()}
          >
            Delete
          </Button>
          <Button
            className="button-wrapper__edit-button"
            variant="contained"
            color="primary"
            component={Link}
            to={examInformationEditPageUrl}
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
  }).isRequired,
  selfIdentification: PropTypes.bool.isRequired,
  deleteExam: PropTypes.func.isRequired,
  examInformationEditPageUrl: PropTypes.string.isRequired
};

export default ExamInformationList;
