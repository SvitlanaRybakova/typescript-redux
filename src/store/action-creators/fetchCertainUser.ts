import { Dispatch } from 'redux';
import axios from 'axios';

import {
  CertainUserActions,
  CertainUserActionTypes,
} from '../../types/getCertainUser';

export const fetchCertainUser = (id: string | undefined): any => {
  return async (dispatch: Dispatch<CertainUserActions>) => {
    try {
      dispatch({ type: CertainUserActionTypes.FETCH_CERTAIN_USER });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      dispatch({
        type: CertainUserActionTypes.FETCH_CERTAIN_USER_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CertainUserActionTypes.FETCH_CAERTAIN_USER_ERROR,
        payload: 'Cannot fetch the particular user',
      });
    }
  };
};
