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
  VpnKey,
  InsertEmoticon,
  School,
  Phone,
  Email,
  Cake
} from "@material-ui/icons";

const createUserInformationRow = (icon, dataName, data) => {
  return { icon, dataName, data };
};

const createTableRows = userInformation => [
  createUserInformationRow(AccountCircle, "Identity", userInformation.id),
  createUserInformationRow(Face, "Name", userInformation.name),
  createUserInformationRow(VpnKey, "Password", userInformation.password),
  createUserInformationRow(
    InsertEmoticon,
    "Nickname",
    userInformation.nickname
  ),
  createUserInformationRow(School, "Student Number", userInformation.stdNumber),
  createUserInformationRow(Phone, "Phone Number", userInformation.phoneNum),
  createUserInformationRow(Email, "E-mail", userInformation.email),
  createUserInformationRow(Cake, "Birthday", userInformation.birthday)
];

const userInformationStyles = makeStyles(theme => ({
  rootClassName: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

const UserInformation = props => {
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

UserInformation.propTypes = {
  userInformation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    stdNumber: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired
  }).isRequired
};

export default UserInformation;
