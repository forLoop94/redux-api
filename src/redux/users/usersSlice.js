import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  isLoading: false,
  error: ''
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async() => {
  try {
    return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
  } catch (error) {
    return error;
  }
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload.results;
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message
    })
  }
})

export default usersSlice.reducer;
