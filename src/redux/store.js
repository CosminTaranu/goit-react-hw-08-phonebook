import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/slices/contactsSlice';
import filterReducer from './slices/filterSlice';
import {authReducer} from './slices/authSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store;
