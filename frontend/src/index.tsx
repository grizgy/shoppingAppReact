import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './context/authProvider';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <React.StrictMode>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path='/*' element={<App/>} /> 
            </Routes>
          </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
