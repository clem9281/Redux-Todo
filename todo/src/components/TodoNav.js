import React from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AddIcon from "@material-ui/icons/Add";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

function TodoNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            TodoList
          </Typography>
        </Toolbar>
        <Toolbar>
          <Tabs
            value={0}
            indicatorColor="secondary"
            textColor="inherit"
            className={classes.grow}
            onClick={() => props.history.push("/today")}
          >
            <Tab label="Today" />
          </Tabs>
          <Button color="inherit" component={Link} to="/add-item">
            <AddIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(withStyles(styles)(TodoNav));
