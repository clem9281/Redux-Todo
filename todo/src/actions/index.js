export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";

export const addTodo = task => {
  return {
    type: ADD_TODO,
    payload: task
  };
};

export const markCompleted = todo => {
  return {
    type: MARK_COMPLETED,
    payload: todo
  };
};
