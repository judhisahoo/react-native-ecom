import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../api/axios.client';
import endpoints from '@/api/endpoints';


// Fetch categories from the API
export const fetchCategories = createAsyncThunk('categories/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosClient.get(endpoints.Category); // Adjust endpoint as needed
    //console.log(response.data); // Debug: Check if data is fetched correctly
    return response.data; // Return fetched categories
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch categories');
  }
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    data: [], // Holds category data
    loading: false, // Loading state for API calls
    error: null, // Error state for API calls
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Update the Redux state with fetched data
        //console.log('State updated with categories:', state.data); // Debug
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch categories';
      });
  },
});

export default categorySlice.reducer;
