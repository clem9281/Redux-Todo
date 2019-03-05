import { ADD_TODO, MARK_COMPLETED, DELETE_ITEM } from "../actions";
const initialListState = {
  todos: [
    {
      task: "A default task",
      isCompleted: false
    }
  ]
};

export const reducer = (state = initialListState, action) => {
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
          if (element.task === action.payload.task) {
            return { task: element.task, isCompleted: !element.isCompleted };
          } else {
            return element;
          }
        })
      };
    case DELETE_ITEM:
      return {
        todos: state.todos.filter(
          element => element.task !== action.payload.task
        )
      };
    default:
      return state;
  }
};
