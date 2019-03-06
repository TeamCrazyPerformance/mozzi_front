import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Import material ui icons.
import MenuIcon from '@material-ui/icons/Menu';

import DrawerList from './../DrawerList/DrawerList';
import './Header.css';

const drawerWidth = 240;

const appBarStyles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
});

const Header = (props) => {
  const { container, children, classes } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <div className={`${classes.root} app-bar-wrapper`}>
      <CssBaseline />
      <AppBar position="fixed" className={`${classes.appBar} app-bar-wrapper__app-bar`}>
        <Toolbar className={`app-bar-wrapper__app-bar__tool-bar`}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={`${classes.menuButton} app-bar-wrapper__app-bar__tool-bar__icon-button`}
          >
            <MenuIcon className={`app-bar-wrapper__app-bar__tool-bar__icon-button__icon`} />
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
      <nav className={`${classes.drawer} app-bar-wrapper__drawer-wrapper`}>
        {/* Width is smaller than 1280px */}
        <Hidden
          className={`app-bar-wrapper__drawer-wrapper__hidden--md-up`}
          implementation="css"
          mdUp
        >
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={drawerOpen}
            onClose={handleDrawerToggle}
            className={`${classes.drawerPaper} app-bar-wrapper__drawer-wrapper__hidden--md-up__drawer drawer-wrapper`}
            // Better open performance on mobile.
            ModalProps={{ keepMounted: true }}
          >
            <DrawerList />
          </Drawer>
        </Hidden>
        {/* Width is bigger then 1280px */}
        <Hidden
          className={`app-bar-wrapper__drawer-wrapper__hidden--md-down`}
          implementation="css"
          mdDown
        >
          <Drawer
            className={`${classes.drawerPaper} app-bar-wrapper__drawer-wrapper__hidden--md-down__drawer drawer-wrapper`}
            variant="permanent"
            open
          >
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>
      <main className={`${classes.content} app-bar-wrapper__main`}>
        <div className={`${classes.toolbar} app-bar-wrapper__main__tool-bar`} />
        {children}
      </main>
    </div>
  );
}

export default withStyles(appBarStyles, {widthTheme: true})(Header);