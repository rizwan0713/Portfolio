import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer : rootReducer,
})

root.render(

    <Provider store={store}>
      <Router>
      
     
        <App />
   
      </Router>
    </Provider>
 
);

