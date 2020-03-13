import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MenuAppBar from "./MenuAppBar";
import { SnackbarProvider } from "notistack";
// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { withSnackbar } from "notistack";
import { withStyles } from "@material-ui/core/styles";

const engSocTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b3959"
    },
    secondary: {
      main: "#aa1b28"
    }
  },
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },
  table: {
    minWidth: 10
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class HeraclesContent extends React.Component {
  render() {
    // const DashboardContent = lazy(() =>
    //   import("./components/DashboardContent")
    // );
    // const LeaderboardContent = lazy(() =>
    //   import("./components/LeaderboardContent")
    // );
    // const SideChallengeContent = lazy(() =>
    //   import("./components/ChallengeTable")
    // );
    // const StaffContent = lazy(() => import("./components/Staff"));
    // const StaffContentApprovals = lazy(() => import("./components/Approvals"));
    // const StaffContentPoints = lazy(() =>
    //   import("./components/PointsTableForm")
    // );
    // const LeaderboardSwitch = lazy(() =>
    //   import("./components/LeaderboardSwitch")
    // );
    const dummyData = [
      { id: 0, task: "finish app", status: "incomplete" },
      { id: 0, task: "finish app", status: "incomplete" },
      { id: 0, task: "finish app", status: "incomplete" },
      { id: 0, task: "finish app", status: "incomplete" }
    ];

    return (
      <div className="HeraclesContent">
        <div>
          {/* <SnackbarProvider maxSnack={3} autoHideDuration={2000}> */}
          <MuiThemeProvider theme={engSocTheme}>
            <Router>
              <div>
                <MenuAppBar />
                <Suspense
                  fallback={
                    <div style={{ marginTop: "100px" }}>Loading...</div>
                  }
                >
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => (
                        <Redirect
                          to={{
                            pathname: "/home",
                            state: { from: this.props.location }
                          }}
                        />
                      )}
                    />
                    {/* <Route path="/dashboard" component={DashboardContent} /> */}
                    <Route path="/leaderboard" />
                    <Route path="/side-challenges" />
                    <Route path="/staff-announcements" />
                    <Route path="/staff-approvals" />
                    <Route path="/staff-points" />
                    <Route path="/staff-leaderboard-toggle" />
                  </Switch>
                </Suspense>
              </div>
            </Router>
          </MuiThemeProvider>
          {/* </SnackbarProvider> */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HeraclesContent);
