import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QuizProvider } from './exam/context/QuizContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuizProvider>
    <App />
    </QuizProvider>
  </StrictMode>
);
