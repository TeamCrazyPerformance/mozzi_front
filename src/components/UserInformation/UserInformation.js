import React from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Face from '@material-ui/icons/Face';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import School from '@material-ui/icons/School';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Cake from '@material-ui/icons/Cake';

const userInformationStyles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  typographyBoxSize: {
    minWidth: 300,
  },
  iconRightMargin: {
    marginRight: 10,
  },
});

const UserInformation = (props) => {
  const {
    data,
    classes,
  } = props;

  return (
    <div>
      <List className={classes.root}>
        <ListItem button>
          <Typography
            className={classes.typographyBoxSize}
            variant="display1"
          >
            <AccountCircle
              className={classes.iconRightMargin}
              fontSize="large"
            />
            Identity
          </Typography>
          <ListItemText primary={data.id} />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem button>
          <Typography
            className={classes.typographyBoxSize}
            variant="display1"
          >
            <Face
              className={classes.iconRightMargin}
              fontSize="large"
            />
            Name
          </Typography>
          <ListItemText primary={data.name} />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem button>
          <Typography
            className={classes.typographyBoxSize}
            variant="display1"
          >
            <VpnKey
              className={classes.iconRightMargin}
              fontSize="large"
            />
            Password
          </Typography>
          <ListItemText primary={data.password} />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem button>
          <Typography
            className={classes.typographyBoxSize}
            variant="display1"
          >
            <InsertEmoticon
              className={classes.iconRightMargin}
              fontSize="large"
            />
            Nickname
          </Typography>
          <ListItemText primary={data.nickname} />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem button>
          <Typography
            className={classes.typographyBoxSize}
            variant="display1"
          >
            <School
              className={classes.iconRightMargin}
              fontSize="large"
            />
            Student Number
          </Typography>
          <ListItemText primary={data.stdNumber} />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem button>
          <Typography
            className={classes.typographyBoxSize}
            variant="display1"
          >
            <Phone
              className={classes.iconRightMargin}
              fontSize="large"
            />
            Phone Number
          </Typography>
          <ListItemText primary={data.phoneNum} />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem button>
          <Typography
            className={classes.typographyBoxSize}
            variant="display1"
          >
            <Email
              className={classes.iconRightMargin}
              fontSize="large"
            />
            E-mail
          </Typography>
          <ListItemText primary={data.email} />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem button>
          <Typography
            className={classes.typographyBoxSize}
            variant="display1"
          >
            <Cake
              className={classes.iconRightMargin}
              fontSize="large"
            />
            Birthday
          </Typography>
          <ListItemText primary={data.birthday} />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
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
    birthday: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(userInformationStyles)(UserInformation);
