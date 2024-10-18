import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('/users/signup', credentials);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
  export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('/users/login', credentials);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
  export const logoutUser = createAsyncThunk('auth/logout', async () => {
    await axios.post('/users/logout');
  });
  
  const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    error: null,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(logoutUser.fulfilled, (state) => {
          state.user = null;
          state.token = null;
          state.isLoggedIn = false;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.error = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.error = action.payload;
        });
    },
  });
  
  export const authReducer = authSlice.reducer;