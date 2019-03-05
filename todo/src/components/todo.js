import React from "react";

import { connect } from "react-redux";
import { markCompleted, deleteItem } from "../actions";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const styles = theme => ({
  listItem: {
    paddingLeft: 0,
    paddingRight: theme.spacing.unit * 4,
    fontSize: "1rem"
  },
  checkbox: {
    paddingLeft: 0
  },
  crossedOut: {
    textDecoration: "line-through"
  }
});

const Todo = props => {
  console.log("todo", props);
  return (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => props.markCompleted(props.todo)}
    >
      <Checkbox
        className={props.classes.checkbox}
        checked={props.todo.isCompleted}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText
        primary={props.todo.task}
        className={props.classes.listItem}
        primaryTypographyProps={
          props.todo.isCompleted
            ? { className: props.classes.crossedOut }
            : null
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Comments"
          onClick={() => {
            console.log("click");
            props.deleteItem(props.todo);
          }}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { markCompleted, deleteItem }
  )(Todo)
);
