import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Layout from './_layout'; // Import Layout as the main component

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}