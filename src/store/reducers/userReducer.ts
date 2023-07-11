const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
interface IFetchUsersActionSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface IFetchUsersActionError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: IFetchUsersAction | IFetchUsersActionError | IFetchUsersActionSuccess
): IUserState => {
  switch (action.type) {
    case FETCH_USERS:
      return { loading: true, error: null, users: [], };
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
