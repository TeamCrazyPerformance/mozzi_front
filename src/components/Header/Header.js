import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DrawerList from "../DrawerList/DrawerList";

const drawerWidth = 240;

const appBarStyles = makeStyles(theme => ({
  rootClassName: {
    display: "flex"
  },
  drawerClassName: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBarClassName: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButtonClassName: {
    marginRight: 20,
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  toolbarClassName: theme.mixins.toolbar,
  drawerPaperClassName: {
    width: drawerWidth
  },
  contentClassName: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  titleClassName: {
    flexGrow: 1
  }
}));

const Header = props => {
  const { children } = props;
  const {
    rootClassName,
    drawerClassName,
    appBarClassName,
    menuButtonClassName,
    toolbarClassName,
    drawerPaperClassName,
    contentClassName,
    titleClassName
  } = appBarStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const accountCircleMenuOpen = Boolean(anchorEl);

  const handleDrawerToggleOpen = () => setDrawerOpen(true);
  const handleDrawerToggleClose = () => setDrawerOpen(false);

  const handleAccountCircleMenuOpen = event => setAnchorEl(event.currentTarget);
  const handleAccountCircleMenuClose = () => setAnchorEl(null);

  return (
    <div className={`${rootClassName} app-bar-wrapper`}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={`${appBarClassName} app-bar-wrapper__app-bar`}
      >
        <Toolbar className="app-bar-wrapper__app-bar__tool-bar">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggleOpen}
            className={`${menuButtonClassName} app-bar-wrapper__app-bar__tool-bar__icon-button`}
          >
            <MenuIcon className="app-bar-wrapper__app-bar__tool-bar__icon-button__icon" />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={`${titleClassName} app-bar-wrapper__app-bar__tool-bar__title`}
            noWrap
          >
            TCP WEB PROJECT
          </Typography>
          <div className="app-bar-wrapper__app-bar__tool-bar__account-circle">
            <IconButton
              aria-owns={accountCircleMenuOpen ? "menu-appbar" : undefined}
              aria-haspopup="true"
              onClick={handleAccountCircleMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={accountCircleMenuOpen}
              onClose={handleAccountCircleMenuClose}
            >
              <MenuItem onClick={handleAccountCircleMenuClose}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleAccountCircleMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={`${drawerClassName} app-bar-wrapper__drawer-wrapper`}>
        {/* Width is smaller than 1280px */}
        <Hidden
          className="app-bar-wrapper__drawer-wrapper__hidden--md-up"
          implementation="css"
          mdUp
        >
          <Drawer
            variant="temporary"
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggleOpen}
            onClick={handleDrawerToggleClose}
            className={`${drawerPaperClassName} app-bar-wrapper__drawer-wrapper__hidden--md-up__drawer drawer-wrapper`}
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
            className={`${drawerPaperClassName} app-bar-wrapper__drawer-wrapper__hidden--md-down__drawer drawer-wrapper`}
            variant="permanent"
            open
          >
            <DrawerList />
          </Drawer>
        </Hidden>
      </nav>
      <main className={`${contentClassName} app-bar-wrapper__main`}>
        <div
          className={`${toolbarClassName} app-bar-wrapper__main__tool-bar`}
        />
        {children}
      </main>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default Header;
