import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL='https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(req => {
  console.log(req);
  return req;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(resp => {
  console.log(resp);
  return resp;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
