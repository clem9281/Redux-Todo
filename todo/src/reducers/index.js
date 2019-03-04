import { ADD_TODO } from "../actions";

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
    default:
      return state;
  }
};
