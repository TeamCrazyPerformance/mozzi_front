import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {
  AccountCircle,
  Face,
  InsertEmoticon,
  SupervisorAccount,
  School,
  MenuBook,
  Phone,
  Email,
  Cake,
  GroupAdd
} from "@material-ui/icons";

const createUserInformationRow = (icon, dataName, data) => {
  return { icon, dataName, data };
};

const createTableRows = userInformation => [
  createUserInformationRow(AccountCircle, "ID", userInformation.id),
  createUserInformationRow(Face, "Name", userInformation.name),
  createUserInformationRow(
    InsertEmoticon,
    "Nickname",
    userInformation.nickname
  ),
  createUserInformationRow(SupervisorAccount, "Role", userInformation.role),
  createUserInformationRow(School, "Student Number", userInformation.stdNumber),
  createUserInformationRow(MenuBook, "Major", userInformation.major),
  createUserInformationRow(Phone, "Phone Number", userInformation.phoneNum),
  createUserInformationRow(Email, "E-mail", userInformation.email),
  createUserInformationRow(Cake, "Birthday", userInformation.birthday),
  createUserInformationRow(GroupAdd, "Join date", userInformation.createAt)
];

const userInformationStyles = makeStyles(theme => ({
  rootClassName: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

const UserInformationList = props => {
  const { rootClassName } = userInformationStyles();
  const { userInformation } = props;
  const tableRow = createTableRows(userInformation);

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

UserInformationList.propTypes = {
  userInformation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    stdNumber: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    createAt: PropTypes.string.isRequired
  }).isRequired
};

export default UserInformationList;
