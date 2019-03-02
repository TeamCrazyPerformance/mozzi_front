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

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

// Import material ui icons.
import AccountCircle from '@material-ui/icons/AccountCircle';
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
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState('Main');

  const _handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const _handleProfileMenuClose = () => setAnchorEl(null);
  const _handleDrawerOpen = () => setOpen(true);
  const _handleDrawerClose = () => setOpen(false);
  // const _handleTitleChange = (title) => setTitle(title);

  return (
    <div className="header">

      <div className="header__app-bar-wrapper">
      <AppBar position="fixed" className="header__app-bar-wrapper__app-bar">
        <Toolbar disableGutters={!open} className="header__app-bar-wrapper__app-bar__tool-bar">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={_handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            {/* {title} */}
          </Typography>
          <div className="header__app-bar-wrapper__app-bar__tool-bar__icon-button-wrapper">
            <IconButton
              aria-owns={Boolean(anchorEl) ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={_handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={_handleProfileMenuClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      </div>


      <div className="header__drawer-wrapper">
      <Drawer
        variant="persistent"
        anchor="left"
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
            // <ListItem component={Link} to={link} key={index} onClick={() => _handleTitleChange(text)} button>
            <ListItem component={Link} to={link} key={index} button>
              <ListItemIcon>{iconComponent}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </div>



      <div className="header__children-wrapper">
        {children}
      </div>
    </div>
  );
};

export default Header;