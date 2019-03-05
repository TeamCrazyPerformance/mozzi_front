import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Import material ui icons.
import MenuIcon from '@material-ui/icons/Menu';

import DrawerList from './../DrawerList/DrawerList';
import './Header.css';

const Header = (props) => {
  const { container, children } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <div className="app-bar-wrapper">
      <CssBaseline />
      <AppBar position="fixed" className="app-bar-wrapper__app-bar">
        <Toolbar className="app-bar-wrapper__app-bar__tool-bar">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className="app-bar-wrapper__app-bar__tool-bar__icon-button"
          >
            <MenuIcon className="app-bar-wrapper__app-bar__tool-bar__icon-button__icon"/>
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
          >
            TCP WEB PROJECT
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className="app-bar-wrapper__drawer-wrapper">
        {/* Width is smaller than 1280px */}
        <Hidden
          className="app-bar-wrapper__drawer-wrapper__hidden--md-up"
          implementation="css"
          mdUp
        >
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            className="app-bar-wrapper__drawer-wrapper__hidden--md-up__drawer drawer"
            // Better open performance on mobile.
            ModalProps={{ keepMounted: true }}
          >
            <DrawerList />
          </Drawer>
        </Hidden>
        {/* Width is bigger then 1280px */}
        <Hidden
          className="app-bar-wrapper__drawer-wrapper__hidden--md-down"
          implementation="css"
          mdDown
        >
          <Drawer
            className="app-bar-wrapper__drawer-wrapper__hidden--md-down__drawer drawer"
            variant="permanent"
            open
          >
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>
      <main className="app-bar-wrapper__main">
        {/* <div className="app-bar-wrapper__main__tool-bar" /> */}
        {children}
      </main>
    </div>
  );
}

export default Header;