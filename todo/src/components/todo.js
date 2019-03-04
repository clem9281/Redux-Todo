import React from "react";

import { connect } from "react-redux";
import { markCompleted } from "../actions";
const Todo = props => {
  return (
    <li
      className={props.todo.isCompleted ? "todo crossed-out" : "todo"}
      onClick={() => {
        props.markCompleted(props.todo);
        console.log("todo props: ", props);
      }}
    >
      {props.todo.task}
    </li>
  );
};

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  { markCompleted }
)(Todo);
