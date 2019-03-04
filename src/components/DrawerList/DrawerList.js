import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Import material ui icons.
import Home from '@material-ui/icons/Home';
import LaptopWindows from '@material-ui/icons/LaptopWindows';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import People from '@material-ui/icons/People';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';

import './DrawerList.css';

const drawerList = [{
  iconComponent: <Home />,
  text: 'Main',
  link: '/main'
}, {
  iconComponent: <LaptopWindows />,
  text: 'Project',
  link: '/project'
}, {
  iconComponent: <LibraryBooks />,
  text: 'Exam',
  link: '/exam'
}, {
  iconComponent: <People />,
  text: 'User management',
  link: '/usermanagement'
}, {
  iconComponent: <SupervisorAccount />,
  text: 'Admin',
  link: '/admin'
}];

const DrawerList = () => {
  return(
    <div className="drawer">
      <div className="drawer__toobar" />
      <List>
        {drawerList.map(({ iconComponent, text, link }, index) => (
          <ListItem component={Link} to={link} key={index} button>
            <ListItemIcon>{iconComponent}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
};

export default DrawerList;