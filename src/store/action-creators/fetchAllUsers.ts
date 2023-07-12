import {UserActions, UserActionTypes} from '../../types/getAllUsers'
import {Dispatch} from 'redux'
import axios from 'axios'

export const fetchUsers = (): any => {
  return async (dispatch: Dispatch<UserActions>) =>{
    try{
      dispatch({type: UserActionTypes.FETCH_ALL_USERS})
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({
        type: UserActionTypes.FETCH_ALL_USERS_SUCCESS, 
        payload: response.data})
    }catch(e){
      dispatch({ 
        type: UserActionTypes.FETCH_ALL_USERS_ERROR, 
        payload: 'Cannot fetch users' });
    }
  }
}