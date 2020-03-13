import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import ToDoIcon from "../images/ToDoIcon.png";
import * as Styled from "../styledComponents";
import { Home, ViewList, CalendarToday } from "@material-ui/icons";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  spacer: {
    height: theme.spacing.unit * 8
  }
});

class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;
  render() {
    const { icon, primary } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
}

const dict = {
  "/home": "Home",
  "/calendar": "My Calendar",
  "/goals": "My Goals"
};

class MenuAppBar extends React.Component {
  state = {
    drawerStatus: false
  };

  toggleDrawer = status => {
    this.setState({ drawerStatus: status });
  };

  pathToName(pathToLookup) {
    return dict[pathToLookup];
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <Styled.AppLogo src={ToDoIcon} />
        <Divider />
        <List onClick={() => this.toggleDrawer(false)}>
          <ListItemLink to="/home" primary="Home" icon={<Home />} />
          <ListItemLink
            to="/calendar"
            primary="Calendar"
            icon={<CalendarToday />}
          />
          <ListItemLink
            to="/goals"
            primary="Goals (Placeholder)"
            icon={<ViewList />}
          />
        </List>
      </div>
    );

    return (
      <div>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={() => this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <Drawer
              open={this.state.drawerStatus}
              onClose={() => this.toggleDrawer(false)}
            >
              {sideList}
            </Drawer>
            <Styled.Pagetitle variant="h6" color={"inherit"}>
              {this.pathToName(window.location.pathname)}
            </Styled.Pagetitle>
          </AppBar>
        </div>
        <div className={classes.spacer}></div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MenuAppBar));
