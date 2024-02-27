import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename='/internet-shop'>
      <React.StrictMode>
        <Global />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
