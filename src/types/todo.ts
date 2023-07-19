export interface ITodo {
  userId: number | string;
  id: number | string;
  title: string;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  yourTodos: ITodo[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODOS_PAGE = 'SET_TODOS_PAGE',
  CREATE_TODO = 'CREATE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
}

export interface IFetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}

export interface IFetchTodoActionSuccess {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

export interface IFetchUsersTodoError {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

export interface ISetTodoPage {
  type: TodoActionTypes.SET_TODOS_PAGE;
  payload: number;
}

export interface ICreateTodo {
  type: TodoActionTypes.CREATE_TODO;
  payload: ITodo[];
}

export interface IToggleTodo {
  type: TodoActionTypes.TOGGLE_TODO;
  payload: { id: number | string };
}

export type TodoAction =
  | IFetchTodoAction
  | IFetchTodoActionSuccess
  | IFetchUsersTodoError
  | ISetTodoPage
  | ICreateTodo
  | IToggleTodo;
