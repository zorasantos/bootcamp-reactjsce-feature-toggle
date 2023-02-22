import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FeatureToggleProvider } from './context/featureToggle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <FeatureToggleProvider>
        <App />
      </FeatureToggleProvider>

  </React.StrictMode>
);

reportWebVitals();
