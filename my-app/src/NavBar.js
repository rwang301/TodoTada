import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { Home, ViewList, CalendarToday } from "@material-ui/icons";
import {
  NavDiv,
  HomeIcon,
  StyledTitle,
  StyledGrid
} from "./styledComponents.js";

const NavBar = () => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>Home</Grid>
            <div style={{ marginTop: "3px" }}>
              <Grid item>
                <Home />
              </Grid>
            </div>
          </Grid>
        </ListItemText>
        <ListItemText inset>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Typography color="inherit" variant="title">
                Your tasks
              </Typography>
            </Grid>
            <div style={{ marginTop: "3px" }}>
              <Grid item>
                <ViewList />
              </Grid>
            </div>
          </Grid>
        </ListItemText>
        <ListItemText inset>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <Typography color="inherit" variant="title">
                Calendar
              </Typography>
            </Grid>
            <div style={{ marginTop: "3px" }}>
              <Grid item>
                <CalendarToday />
              </Grid>
            </div>
          </Grid>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default NavBar;
