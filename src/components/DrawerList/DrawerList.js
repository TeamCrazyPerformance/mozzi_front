import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Home from "@material-ui/icons/Home";
import LaptopWindows from "@material-ui/icons/LaptopWindows";
// import Description from "@material-ui/icons/Description";
// import NoteAdd from "@material-ui/icons/NoteAdd";
import Create from "@material-ui/icons/Create";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import PostAdd from "@material-ui/icons/PostAdd";
import Memory from "@material-ui/icons/Memory";
import GroupAdd from "@material-ui/icons/GroupAdd";
import Group from "@material-ui/icons/Group";

// import './DrawerList.css';

const drawerList = [
  [
    {
      iconComponent: <Home />,
      text: "Main",
      link: "/main",
      sort: "user"
    }
  ],
  // Project drawer list.
  [
    {
      iconComponent: <LaptopWindows />,
      text: "Project",
      link: "/project",
      sort: "user"
    }
    // {
    //   iconComponent: <Description />,
    //   text: "Projects",
    //   link: "/project/projects"
    // },
    // {
    //   iconComponent: <NoteAdd />,
    //   text: "New Project",
    //   link: "/project/project/create"
    // }
  ],
  // Exam drawer list.
  [
    {
      iconComponent: <Create />,
      text: "Exam",
      link: "/exam",
      sort: "user"
    },
    {
      iconComponent: <LibraryBooks />,
      text: "Exams",
      link: "/exam/exams",
      sort: "user"
    },
    {
      iconComponent: <PostAdd />,
      text: "New Exam",
      link: "/exam/exam/create",
      sort: "user"
    }
  ],
  // Admin drawer list.
  [
    {
      iconComponent: <Memory />,
      text: "Admin",
      link: "/admin",
      sort: "admin"
    },
    {
      iconComponent: <GroupAdd />,
      text: "Join Requests",
      link: "/admin/joinrequests",
      sort: "admin"
    },
    {
      iconComponent: <Group />,
      text: "Users",
      link: "/admin/users",
      sort: "admin"
    }
  ]
];

const drawerListStyles = makeStyles(() => ({
  drawerWrapperClassName: {
    width: 240
  },
  toolbarClassName: {
    height: 55
  }
}));

const DrawerList = ({ role }) => {
  const { drawerWrapperClassName, toolbarClassName } = drawerListStyles();

  return (
    <div className={`${drawerWrapperClassName} drawer-wrapper`}>
      <div className={`${toolbarClassName} drawer-wrapper__empty-space`} />
      <List>
        {drawerList.map(list =>
          list.map(({ iconComponent, text, link, sort }, index) => {
            if (!(sort === "admin" && role === "user")) {
              return (
                <div key={text}>
                  {/* Check first index for divider */}
                  {index === 0 ? <Divider /> : <></>}
                  <ListItem component={Link} to={link} button>
                    <ListItemIcon>{iconComponent}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </div>
              );
            }
            return <></>;
          })
        )}
      </List>
    </div>
  );
};

DrawerList.propTypes = {
  role: PropTypes.string.isRequired
};

export default DrawerList;
