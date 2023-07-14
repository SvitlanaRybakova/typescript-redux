import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import {certainUserReducer} from './certainUserReducer'
import {todosReducer} from './todosReducer'


export const rootReducer = combineReducers({
  user: userReducer,
  certainUser: certainUserReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
