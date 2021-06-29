import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import emailAuthReducer from 'reducers/emailAuthReducer';

export const store = configureStore({
  reducer: {
    emailReducer: emailAuthReducer
  }
});
