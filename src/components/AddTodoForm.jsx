import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todoActions";
export function AddTodoForm() {
  const dispatch = useDispatch();
  const input = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await dispatch(addTodoAction(input.current.value));
    setLoading(false);
    input.current.value = "";
    input.current.focus();
  };
  return (
    <React.Fragment>
      {loading && "Chargement..."}
      <form className="space-x-4" onSubmit={handleSubmit}>
        <input
          className="border border-gray-600 p-1.5 rounded-md w-52"
          type="text"
          placeholder="Tâche"
          ref={input}
        />
        <button
          disabled={loading}
          className="bg-blue-400 text-white p-1.5 rounded-md disabled:opacity-50"
        >
          Ajouter
        </button>
      </form>
    </React.Fragment>
  );
}
