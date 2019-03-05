import React, { Component } from "react";
import "./App.css";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import blue from "@material-ui/core/colors/blue";
import teal from "@material-ui/core/colors/teal";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoNav from "./components/TodoNav";

const theme = createMuiTheme({
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
  }
});
console.log(theme);
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <TodoNav />
          <Grid container justify="center">
            <Grid item>
              <Paper className={this.props.classes.paperStyles} elevation={1}>
                <TodoList />
                <TodoForm />
              </Paper>
            </Grid>
          </Grid>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
