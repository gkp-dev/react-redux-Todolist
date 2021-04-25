let id = 6;

const initialState = [
  { id: 1, title: "Faire ses devoirs", complete: false },
  { id: 2, title: "Faire à manger", complete: false },
  { id: 3, title: "Lire le livre 'Sale Like Crazy'", complete: false },
  { id: 4, title: "Donner des cours de redux", complete: false },
  { id: 5, title: "Envoyer des vidéos de dev", complete: false },
  { id: 6, title: "Faire une pause", complete: false },
];

export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [
        ...state,
        { id: ++id, title: action.payload.title, complete: false },
      ];
    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });
    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
