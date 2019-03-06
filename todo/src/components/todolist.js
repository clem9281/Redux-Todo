import React from "react";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Todo from "./Todo";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const TodoList = props => {
  return (
    <div>
      <Typography variant="h6">Today</Typography>
      <List className={props.classes.root}>
        {props.todos.map(todo => (
          <Todo todo={todo} key={todo.task} />
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default withStyles(styles)(connect(mapStateToProps)(TodoList));
