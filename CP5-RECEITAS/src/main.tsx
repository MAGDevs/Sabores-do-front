import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ReceitaFormProvider } from './contexts/ReceitaFormContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReceitaFormProvider>
      <App />
    </ReceitaFormProvider>
  </React.StrictMode>,
);