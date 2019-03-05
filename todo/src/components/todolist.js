import React from "react";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Todo from "./Todo";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const TodoList = props => {
  console.log("todo props: ", props);
  return (
    <div>
      <List className={props.classes.root}>
        {props.todos.map(todo => (
          <Todo todo={todo} key={todo.task} />
        ))}
      </List>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("todo state: ", state);
  return {
    todos: state.todos
  };
};

export default withStyles(styles)(connect(mapStateToProps)(TodoList));
