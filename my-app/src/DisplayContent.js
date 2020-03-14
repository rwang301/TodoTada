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
import MenuAppBar from "./components/MenuAppBar";
import { SnackbarProvider } from "notistack";
// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { withSnackbar } from "notistack";
import { withStyles } from "@material-ui/core/styles";
import TodayForm from "./components/TodayForm";
import FormModal from "./modals/FormModal";
import HomePage from "./components/HomePage";
import CalendarPage from "./components/CalendarPage";
import GoalsPage from "./components/GoalsPage";

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
                    <Route path="/home">
                      <HomePage />
                    </Route>
                    <Route path="/calendar">
                      <CalendarPage />
                    </Route>
                    <Route path="/goals">
                      <GoalsPage />
                    </Route>
                  </Switch>
                </Suspense>
              </div>
            </Router>
          </MuiThemeProvider>
          {/* <FormModal show={true} /> */}
          {/* </SnackbarProvider> */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HeraclesContent);
