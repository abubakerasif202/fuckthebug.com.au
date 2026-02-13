import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);

export default Router;
