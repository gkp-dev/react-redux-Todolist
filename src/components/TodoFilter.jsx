import React from "react";
import { connect } from "react-redux";
import { setFilterAction } from "../store/filterActions";
import { filterSelector } from "../store/filterSelector";

export function TodoFilter({ value, onChange }) {
  console.log("Value", value);
  return (
    <div className="space-x-4 p-1">
      <button
        className="bg-blue-400 p-1.5 rounded-lg transition duration-300 hover:bg-blue-300 disabled:opacity-50"
        disabled={value === null}
        onClick={() => onChange(null)}
      >
        Aucun filtre
      </button>
      <button
        className="bg-blue-400 p-1.5 rounded-lg transition duration-300 hover:bg-blue-300 disabled:opacity-50"
        disabled={value === true}
        onClick={() => onChange(true)}
      >
        Completé
      </button>
      <button
        className="bg-blue-400 p-1.5 rounded-lg transition duration-300 hover:bg-blue-300 disabled:opacity-50"
        disabled={value === false}
        onClick={() => onChange(false)}
      >
        A faire
      </button>
    </div>
  );
}

export const TodoFilterStore = connect(
  (state) => ({
    value: filterSelector(state),
  }),
  (dispatch) => ({
    onChange: (value) => dispatch(setFilterAction(value)),
  })
)(TodoFilter);
