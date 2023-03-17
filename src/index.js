import React from 'react';
import ReactDOM from 'react-dom/client';
import  App from 'components/App';
import Modal from 'components/Modal/Modal';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Modal />
  </React.StrictMode>
);
