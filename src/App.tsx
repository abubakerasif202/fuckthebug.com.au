import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Router from './routes/Router';

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
    <Analytics />
  </BrowserRouter>
);

export default App;
