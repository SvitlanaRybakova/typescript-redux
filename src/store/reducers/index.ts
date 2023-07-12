import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import {certainUserReducer} from './certainUserReducer'


export const rootReducer = combineReducers({
  user: userReducer,
  certainUser: certainUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
