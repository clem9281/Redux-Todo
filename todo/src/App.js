import React, { Component } from "react";
import "./App.css";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Route } from "react-router-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoNav from "./components/TodoNav";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  paperStyles: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  outerContainer: {
    maxWidth: "1000px",
    margin: "0 auto"
  }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <div className={this.props.classes.outerContainer}>
            <TodoNav />
            <Grid container justify="center">
              <Grid item>
                <Paper className={this.props.classes.paperStyles} elevation={1}>
                  <Route
                    path="/today"
                    render={props => <TodoList {...props} />}
                  />
                  <Route
                    path="/add-item"
                    render={props => <TodoForm {...props} />}
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
