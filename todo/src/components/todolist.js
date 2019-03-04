import React from "react";

import { connect } from "react-redux";

import { addTodo } from "../actions";

import Todo from "./todo";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <Todo todo={todo} key={todo.task} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
