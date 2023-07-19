import { ITodoState, TodoAction, TodoActionTypes } from '../../types/todo';

const initialState: ITodoState = {
  todos: [],
  yourTodos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
};

export const todosReducer = (
  state: ITodoState = initialState,
  action: TodoAction
): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.TOGGLE_TODO:
      const updatedTodos = state.yourTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

      return { ...state, yourTodos: updatedTodos };

    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };

    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case TodoActionTypes.SET_TODOS_PAGE:
      return { ...state, page: action.payload };

    case TodoActionTypes.CREATE_TODO:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          loading: false,
          yourTodos: [...state.yourTodos, ...action.payload],
        };
      } else {
        return {
          ...state,
          loading: false,
          yourTodos: [...state.yourTodos, action.payload],
        };
      }

    default:
      return state;
  }
};
