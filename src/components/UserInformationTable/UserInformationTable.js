// import React from "react";
// import PropTypes from "prop-types";

// import Divider from "@material-ui/core/Divider";
// import { withStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";

// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Face from "@material-ui/icons/Face";
// import VpnKey from "@material-ui/icons/VpnKey";
// import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
// import School from "@material-ui/icons/School";
// import Phone from "@material-ui/icons/Phone";
// import Email from "@material-ui/icons/Email";
// import Cake from "@material-ui/icons/Cake";

// const userInformationStyles = theme => ({
//   root: {
//     width: "100%",
//     backgroundColor: theme.palette.background.paper
//   },
//   typographyBoxSize: {
//     minWidth: 300
//   },
//   iconRightMargin: {
//     marginRight: 10
//   }
// });

// const UserInformation = props => {
//   const { data, classes } = props;
//   return (
//     <div>
//       <List className={classes.root}>
//         <ListItem button>
//           <Typography className={classes.typographyBoxSize} variant="body1">
//             <AccountCircle
//               className={classes.iconRightMargin}
//               fontSize="large"
//             />
//             Identity
//           </Typography>
//           <ListItemText primary={data.id} />
//         </ListItem>
//         <Divider variant="inset" component="li" />

//         <ListItem button>
//           <Typography className={classes.typographyBoxSize} variant="body1">
//             <Face className={classes.iconRightMargin} fontSize="large" />
//             Name
//           </Typography>
//           <ListItemText primary={data.name} />
//         </ListItem>
//         <Divider variant="inset" component="li" />

//         <ListItem button>
//           <Typography className={classes.typographyBoxSize} variant="body1">
//             <VpnKey className={classes.iconRightMargin} fontSize="large" />
//             Password
//           </Typography>
//           <ListItemText primary={data.password} />
//         </ListItem>
//         <Divider variant="inset" component="li" />

//         <ListItem button>
//           <Typography className={classes.typographyBoxSize} variant="body1">
//             <InsertEmoticon
//               className={classes.iconRightMargin}
//               fontSize="large"
//             />
//             Nickname
//           </Typography>
//           <ListItemText primary={data.nickname} />
//         </ListItem>
//         <Divider variant="inset" component="li" />

//         <ListItem button>
//           <Typography className={classes.typographyBoxSize} variant="body1">
//             <School className={classes.iconRightMargin} fontSize="large" />
//             Student Number
//           </Typography>
//           <ListItemText primary={data.stdNumber} />
//         </ListItem>
//         <Divider variant="inset" component="li" />

//         <ListItem button>
//           <Typography className={classes.typographyBoxSize} variant="body1">
//             <Phone className={classes.iconRightMargin} fontSize="large" />
//             Phone Number
//           </Typography>
//           <ListItemText primary={data.phoneNum} />
//         </ListItem>
//         <Divider variant="inset" component="li" />

//         <ListItem button>
//           <Typography className={classes.typographyBoxSize} variant="body1">
//             <Email className={classes.iconRightMargin} fontSize="large" />
//             E-mail
//           </Typography>
//           <ListItemText primary={data.email} />
//         </ListItem>
//         <Divider variant="inset" component="li" />

//         <ListItem button>
//           <Typography className={classes.typographyBoxSize} variant="body1">
//             <Cake className={classes.iconRightMargin} fontSize="large" />
//             Birthday
//           </Typography>
//           <ListItemText primary={data.birthday} />
//         </ListItem>
//         <Divider variant="inset" component="li" />
//       </List>
//     </div>
//   );
// };

// UserInformation.propTypes = {
//   classes: PropTypes.shape({
//     root: PropTypes.string.isRequired,
//     iconRightMargin: PropTypes.string.isRequired,
//     typographyBoxSize: PropTypes.string.isRequired
//   }).isRequired,
//   data: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     nickname: PropTypes.string.isRequired,
//     stdNumber: PropTypes.string.isRequired,
//     phoneNum: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     birthday: PropTypes.string.isRequired
//   }).isRequired
// };

// export default withStyles(userInformationStyles)(UserInformation);

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

const rows = [
  createUserInformationRow(AccountCircle, "Identity", "a"),
  createUserInformationRow(Face, "Name", "b"),
  createUserInformationRow(VpnKey, "Password", "c"),
  createUserInformationRow(InsertEmoticon, "Nickname", "d"),
  createUserInformationRow(School, "Student Number", "e"),
  createUserInformationRow(Phone, "Phone Number", "f"),
  createUserInformationRow(Email, "E-mail", "g"),
  createUserInformationRow(Cake, "Birthday", "h")
];

const userInformationStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const UserInformation = () => {
  const { rootClassName } = userInformationStyles();

  return (
    <List className={rootClassName}>
      {rows.map(row => (
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
  data: PropTypes.shape({
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
