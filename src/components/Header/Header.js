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

  const [count, setCounte] = useState(0);

  const _handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const _handleProfileMenuClose = () => setAnchorEl(null);
  const _handleDrawerOpen = () => setOpen(true);
  const _handleDrawerClose = () => setOpen(false);

  console.log(count);

  return (
    <div className="header">
      <AppBar
        position="fixed"
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={_handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Persistent drawer
          </Typography>
          <div>
            <IconButton
              aria-owns={Boolean(anchorEl) ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              // onClick={_handleProfileMenuOpen}
              onClick={() => setCounte(count + 1)}
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
            <ListItem component={Link} to={link} key={index} button>
              <ListItemIcon>{iconComponent}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </div>
  );
};

export default Header;