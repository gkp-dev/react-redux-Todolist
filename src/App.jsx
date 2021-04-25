import React from "react";
import { Provider } from "react-redux";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoFilterStore } from "./components/TodoFilter";
import { TodoListStore } from "./components/TodoList";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-center text-3xl my-20 font-bold">
        TodoList with react and redux{" "}
      </h1>
      <TodoFilterStore />
      <TodoListStore />
      <AddTodoForm />
    </Provider>
  );
}

export default App;
