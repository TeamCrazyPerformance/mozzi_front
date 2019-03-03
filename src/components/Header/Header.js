import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';

// Import material ui icons.
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Home from '@material-ui/icons/Home';
import LaptopWindows from '@material-ui/icons/LaptopWindows';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import People from '@material-ui/icons/People';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';

import './Header.css';

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

const Header = ({ children }) => {
  // Create state.
  const [open, setOpen] = useState(false);
  const [backgroundHidden, setBackgroundHidden] = useState('hidden');

  const _handleDrawerOpen = () => {
    setOpen(true);
    setBackgroundHidden('visible');
  };

  const _handleDrawerClose = () => {
    setOpen(false);
    setBackgroundHidden('hidden');
  };

  return (
    <div className="header">

      <div className="header__app-bar-wrapper">
        <AppBar
          position="fixed"
          className="header__app-bar-wrapper__app-bar"
        >
          <Toolbar
            disableGutters={!open}
            className="header__app-bar-wrapper__app-bar__tool-bar"
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              className="header__app-bar-wrapper__app-bar__tool-bar__menu-icon-button"
              onClick={_handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className="header__app-bar-wrapper__app-bar__tool-bar__title"
              noWrap
            >
              TCP WEB
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="header__drawer-wrapper">
        <Drawer
          variant="persistent"
          anchor="left"
          className="header__drawer-wrapper__drawer"
          open={open}
        >
          <div>
            <IconButton onClick={_handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {drawerList.map(({ iconComponent, text, link }, index) => (
              <ListItem component={Link} to={link} key={index} button>
                <ListItemIcon>{iconComponent}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <div className={`header__children-wrapper header__children-wrpper--${backgroundHidden}`}>
        {children}
      </div>
    </div>
  );
};

export default Header;