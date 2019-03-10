import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

// Import material ui icons.
import Home from '@material-ui/icons/Home';
import LaptopWindows from '@material-ui/icons/LaptopWindows';
import LibraryBooks from '@material-ui/icons/LibraryBooks';

// Admin drawer list icons.
import Memory from '@material-ui/icons/Memory';
import GroupAdd from '@material-ui/icons/GroupAdd';
import Group from '@material-ui/icons/Group';

import './DrawerList.css';

const drawerList = [
[{
  iconComponent: <Home />,
  text: 'Main',
  link: '/main'
}],
// Project drawer list.
[{
  iconComponent: <LaptopWindows />,
  text: 'Project',
  link: '/project'
}, {
  iconComponent: <LaptopWindows />,
  text: 'Project',
  link: '/project'
}],
//Exam drawer list.
[{
  iconComponent: <LibraryBooks />,
  text: 'Exam',
  link: '/exam'
}, {
  iconComponent: <LibraryBooks />,
  text: 'Exam',
  link: '/exam'
}],
// Admin drawer list.
[{
  iconComponent: <Memory />,
  text: 'Admin',
  link: '/admin'
}, {
  iconComponent: <GroupAdd />,
  text: 'Join Request',
  link: '/admin/joinrequests'
}, {
  iconComponent: <Group />,
  text: 'User List',
  link: '/admin/users'
}]
];

const drawerListStyles = theme => ({
  drawerWrapper: {
    width: 240
  },
  toolbar: {
    height: 55
  },
});

const DrawerList = (props) => {
  const { classes } = props;

  return(
    <div className={`${classes.drawerWrapper} drawer-wrapper`}>
      <div className={`${classes.toolbar} drawer-wrapper__empty-space`} />
      <List>
        {drawerList.map((list, listIndex) => (
          list.map(({ iconComponent, text, link }, index) => {
            // Create uniqe key value.
            const uniqueKeyValue = Number(listIndex.toString() + index.toString());
            if(index === 0) {
              // First index for divider component.
              return (
                <div key={uniqueKeyValue}>
                  <Divider />
                  <ListItem component={Link} to={link} button>
                    <ListItemIcon>{iconComponent}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </div>
              )
            } else {
              return(
                <div key={uniqueKeyValue} >
                  <ListItem component={Link} to={link} button>
                    <ListItemIcon>{iconComponent}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </div>
              )
            }
          })
        ))}
      </List>
    </div>
  )
};

export default withStyles(drawerListStyles)(DrawerList);