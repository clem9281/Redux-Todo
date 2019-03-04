import React from "react";

import { connect } from "react-redux";

import { addTodo } from "../actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = (e, task) => {
    e.preventDefault();
    this.props.addTodo(task);
    this.setState({ inputText: "" });
  };
  render() {
    console.log("form props: ", this.props);
    return (
      <form onSubmit={e => this.submitHandler(e, this.state.inputText)}>
        <input
          type="text"
          value={this.state.inputText}
          name="inputText"
          onChange={this.changeHandler}
        />
        <button>Add</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
