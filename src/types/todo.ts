export interface ITodoState {
  todos: any[];
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

export type TodoAction =
  | IFetchTodoAction
  | IFetchTodoActionSuccess
  | IFetchUsersTodoError
  | ISetTodoPage;