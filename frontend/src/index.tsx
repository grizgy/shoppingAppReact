import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from 'react-auth-kit'
// import authStore from './authStore';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={false}>
                <App/>
      </AuthProvider>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
