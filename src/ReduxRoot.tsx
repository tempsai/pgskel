import * as React from 'react';
import { Provider } from 'react-redux';
import { App } from './App';
import configureStore from './configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = configureStore();

export function ReduxRoot() {
  return (
    <Provider store={store}>
      <PersistGate loading={'loading..'} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
