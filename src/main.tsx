import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadCriticalImages } from './utils/performance';

// Preload critical hero images
const criticalImages = [
  'https://ik.imagekit.io/dzmabcda0/finals/9-DSC00914.jpg'
];

preloadCriticalImages(criticalImages);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
