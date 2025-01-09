import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    categories: categoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Use Redux Toolkit's default middleware
});

export default store;
