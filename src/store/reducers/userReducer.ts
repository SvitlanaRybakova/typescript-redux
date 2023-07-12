import {
  IUserState,
  UserActionTypes,
  UserActions,
} from '../../types/getAllUsers';


const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_ALL_USERS:
      return { loading: true, error: null, users: [] };
    case UserActionTypes.FETCH_ALL_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_ALL_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
