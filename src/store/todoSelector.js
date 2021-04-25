import { createSelector } from "reselect";
import { filterSelector } from "./filterSelector";

export const todoSelector = (state) => state.todos;

export const filterTodoSelector = createSelector(
  todoSelector,
  filterSelector,
  (todos, filter) => {
    if (filter == null) {
      return todos;
    }
    return todos.filter((todo) => todo.complete === filter);
  }
);

// export const filterTodoSelector = ({ todos, filter }) => {
//   if (filter == null) {
//     return todos;
//   }
//   return todos.filter((todo) => todo.complete === filter);
// };
