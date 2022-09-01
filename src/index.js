import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './store/reducers/rootReducer'


const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = configureStore({ reducer: rootReducers })

root.render(
  <React.StrictMode >
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
