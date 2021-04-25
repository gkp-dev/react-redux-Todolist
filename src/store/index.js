import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filterReducer } from "./filterReducer";
import { todoReducer } from "./todoReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
// export const store = createStore(todoReducer, composedEnhancer);

export const store = createStore(
  combineReducers({
    todos: todoReducer,
    filter: filterReducer,
  }),
  composedEnhancer
);
