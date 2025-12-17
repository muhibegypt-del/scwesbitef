import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadCriticalImages } from './utils/performance';

// Preload critical hero images
const criticalImages = [
  'https://happylifemission.org/wp-content/uploads/2022/04/Happy-Kids.jpg',
  '/replicate-prediction-qwrk850ta9rga0ctwec93qq5mg.png'
];

preloadCriticalImages(criticalImages);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
