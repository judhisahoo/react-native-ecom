import * as SecureStore from 'expo-secure-store';

// Save token to secure storage
export const saveTokenToStorage = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

// Retrieve token from secure storage
export const getTokenFromStorage = async (key) => {
  return await SecureStore.getItemAsync(key);
};

// Remove token from secure storage
export const removeTokenFromStorage = async (key) => {
  await SecureStore.deleteItemAsync(key);
};