import wait from "./helpers/wait";

import {
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
  UPDATE_TODO_ACTION,
} from "./todoReducer";

export const completeAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: { ...todo, complete: !todo.complete },
});

export const deleteAction = (todo) => ({
  type: DELETE_TODO_ACTION,
  payload: { id: todo.id },
});

export const addTodoAction = (title) => async (dispatch) => {
  await wait(3000);
  dispatch({
    type: ADD_TODO_ACTION,
    payload: { title },
  });
};
