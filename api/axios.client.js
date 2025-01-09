import axios from 'axios';
import Config from 'react-native-config';
import { getTokenFromStorage, removeTokenFromStorage } from '../common/secureStorageHelper'; // Import helper functions

const BASE_URL = 'https://api.cmicaribbean.com'; //Config.API_BASE_URL;
//console.log('BASE_URL ===',BASE_URL);
const axiosClient = axios.create({
  baseURL: `${BASE_URL}/api`,
});

console.log('axiosClient.getUri ::::',axiosClient.getUri());

// Request Interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromStorage('ACCESS_TOKEN'); // Retrieve token securely
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Set Content-Type for POST/PUT requests
    if (config.method === 'post' || config.method === 'put') {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  (error) => {
    console.log('axios error:::',error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;

    if (response?.status === 401) {
      // Handle Unauthorized
      await removeTokenFromStorage('ACCESS_TOKEN');
      // Optionally redirect user to the login screen
    } else if (response?.status === 404) {
      // Handle Not Found
    }

    return Promise.reject(error);
  }
);

export default axiosClient;