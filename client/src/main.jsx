import React from 'react';
import ReactDOM from 'react-dom/client';

import { TransactionProvider } from './context/TransactionContext';
import App from './App';
import './index.css';

const main = document.getElementById('root')
const root = ReactDOM.createRoot(main)

const app = (
  
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>

)

root.render(app)