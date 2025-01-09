import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../api/axios.client';
import endpoints from '../../api/endpoints';
import { saveTokenToStorage, removeTokenFromStorage } from '../../common/secureStorageHelper'; // Helper functions

// Thunk for user login
export const loginUser = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post(endpoints.UserSignIN, credentials);
    const { token, userDetails } = response.data; // Assuming API returns token and user details
    await saveTokenToStorage('ACCESS_TOKEN', token); // Save token securely
    return { token, userDetails };
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Thunk for user registration
export const registerUser = createAsyncThunk('user/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post(endpoints.UserSignUp, userData);
    return response.data; // Assuming registration returns success message
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Thunk for fetching user info
export const fetchUserInfo = createAsyncThunk('user/fetchInfo', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get(endpoints.UserInfo);
    return response.data; // Assuming the response contains user details
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Thunk for updating user info
export const updateUser = createAsyncThunk('user/update', async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosClient.put(endpoints.UserUpdate, userData);
    return response.data; // Assuming the response contains updated user details
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    userDetails: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.userDetails = null;
      state.token = null;
      removeTokenFromStorage('ACCESS_TOKEN'); // Remove token securely
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.userDetails = action.payload.userDetails;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Registration
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch User Info
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update User Info
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
