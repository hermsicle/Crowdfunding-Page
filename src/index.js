import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ContextProvider } from './components/Context'
import { PledgeContextProvider } from './components/PledgeContext'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <PledgeContextProvider>
      <Router>
        <App />
      </Router>
      </PledgeContextProvider>
    </ContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
