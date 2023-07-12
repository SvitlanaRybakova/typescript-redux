import {
  ICertainUserState,
  CertainUserActionTypes,
  CertainUserActions,
} from '../../types/getCertainUser';

const initialState: ICertainUserState = {
  user: {},
  loading: false,
  error: null,
};

export const certainUserReducer = (
  state = initialState,
  action: CertainUserActions
): ICertainUserState => {
  switch (action.type) {
    case CertainUserActionTypes.FETCH_CERTAIN_USER:
      return { loading: true, error: null, user: {} };
    case CertainUserActionTypes.FETCH_CERTAIN_USER_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case CertainUserActionTypes.FETCH_CAERTAIN_USER_ERROR:
      return { loading: false, error: action.payload, user: {} };
    default:
      return state;
  }
};
