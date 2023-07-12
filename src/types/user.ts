export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_ALL_USERS = 'FETCH_ALL_USERS',
  FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS',
  FETCH_ALL_USERS_ERROR = 'FETCH_ALL_USERS_ERROR',
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_ALL_USERS;
}

interface IFetchUsersActionSuccess {
  type: UserActionTypes.FETCH_ALL_USERS_SUCCESS;
  payload: any[];
}

interface IFetchUsersActionError {
  type: UserActionTypes.FETCH_ALL_USERS_ERROR;
  payload: string;
}

export type UserActions =
  | IFetchUsersAction
  | IFetchUsersActionError
  | IFetchUsersActionSuccess;
