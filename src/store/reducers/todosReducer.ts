import { ITodoState, TodoAction, TodoActionTypes } from '../../types/todo';

const initialState: ITodoState = {
  todos: [],
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
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };

    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ... state, loading: false, todos: action.payload };

    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {...state, loading: false, error: action.payload };

    case TodoActionTypes.SET_TODOS_PAGE:
      return { ...state, page: action.payload };

    default:
      return state;
  }
};
