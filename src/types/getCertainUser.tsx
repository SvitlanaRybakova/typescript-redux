export interface ICertainUserState {
  user: any;
  loading: boolean;
  error: null | string;
}

export enum CertainUserActionTypes {
  FETCH_CERTAIN_USER = 'FETCH_CERTAIN_USER',
  FETCH_CERTAIN_USER_SUCCESS = 'FETCH_CERTAIN_USER_SUCCESS',
  FETCH_CAERTAIN_USER_ERROR = 'FETCH_CAERTAIN_USER_ERROR',
}

export interface IFetchCertainUserAction {
  type: CertainUserActionTypes.FETCH_CERTAIN_USER;
}

export interface IFetchCertainUserActionSuccess {
  type: CertainUserActionTypes.FETCH_CERTAIN_USER_SUCCESS;
  payload: {};
}

export interface IFetchCertainUserActionError {
  type: CertainUserActionTypes.FETCH_CAERTAIN_USER_ERROR;
  payload: string;
}

export type CertainUserActions =
  | IFetchCertainUserAction
  | IFetchCertainUserActionSuccess
  | IFetchCertainUserActionError;
