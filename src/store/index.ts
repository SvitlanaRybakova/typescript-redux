import { applyMiddleware, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers'

export const store = configureStore({
  reducer: rootReducer,
  // middleware:[ applyMiddleware(thunk)],
});

// export const store = createStore(rootReducer, applyMiddleware(thunk))