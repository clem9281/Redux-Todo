import { ADD_TODO, MARK_COMPLETED } from "../actions";

const initialState = {
  todos: [
    {
      task: "A default task",
      isCompleted: false
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            task: action.payload,
            isCompleted: false
          }
        ]
      };
    case MARK_COMPLETED:
      return {
        todos: state.todos.map(element => {
          console.log(element.task === action.payload.task);
          if (element.task === action.payload.task) {
            return { task: element.task, isCompleted: !element.isCompleted };
          } else {
            return element;
          }
        })
      };
    default:
      return state;
  }
};
