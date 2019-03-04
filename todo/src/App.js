import React, { Component } from "react";
import "./App.css";

import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
