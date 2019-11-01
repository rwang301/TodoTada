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
import ToDoIcon from "./images/ToDoIcon.png";
import * as Styled from "./styledComponents";
import { Home, ViewList, CalendarToday } from "@material-ui/icons";

const styles = theme => ({
  list: {
    width: 250
  }
});

class ListItemLink extends React.Component {
  render() {
    return (
      <li>
        <ListItem button>Ye</ListItem>
      </li>
    );
  }
}

class MenuAppBar extends React.Component {
  state = {
    drawerStatus: true
  };

  toggleDrawer = status => {
    this.setState({ drawerStatus: status });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <Styled.AppLogo src={ToDoIcon} />
        <Divider />
        <List subheader={<ListSubheader>Today's tasks</ListSubheader>}>
          <ListItemLink />
          <ListItemLink />
        </List>
      </div>
    );

    return (
      <div>
        <AppBar>
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
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MenuAppBar);
