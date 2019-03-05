import React from "react";

import { connect } from "react-redux";

import { addTodo } from "../actions";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  button: {
    display: "block",
    margin: "10px auto"
  }
};

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
        <TextField
          id="newTodo"
          label="New Todo Item"
          value={this.state.inputText}
          name="inputText"
          onChange={this.changeHandler}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          className={this.props.classes.button}
          type="submit"
        >
          Add
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { addTodo }
  )(TodoForm)
);
