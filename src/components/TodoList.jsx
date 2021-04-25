import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeAction, deleteAction } from "../store/todoActions";
import { filterTodoSelector, todoSelector } from "../store/todoSelector";

//Pure component
export const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <ul>
      <li className="my-4">
        <input
          className="mx-2"
          type="checkbox"
          onChange={() => onToggle(todo)}
          checked={todo.complete}
        />
        {todo.title}
        <button
          onClick={() => onDelete(todo)}
          className="bg-red-500 p-2 rounded-lg text-white ml-2"
        >
          X
        </button>
      </li>
    </ul>
  );
};

//Pure component
export const TodoList = ({ todos, onToggle, onDelete }) => {
  return todos.map((todo) => (
    <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
  ));
};

//TodoList store
export const TodoListStore = () => {
  const todos = useSelector(filterTodoSelector);
  const dispatch = useDispatch();
  const handleToggle = (todo) => dispatch(completeAction(todo));
  const handleDelete = (todo) => dispatch(deleteAction(todo));
  return (
    <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
  );
};
