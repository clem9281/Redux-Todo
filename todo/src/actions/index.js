export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const DELETE_ITEM = "DELETE_ITEM";

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

export const deleteItem = todo => {
  return {
    type: DELETE_ITEM,
    payload: todo
  };
};
