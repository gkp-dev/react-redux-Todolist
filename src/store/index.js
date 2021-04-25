import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { todoReducer } from "./todoReducer"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
export const store = createStore(todoReducer, composedEnhancer)
