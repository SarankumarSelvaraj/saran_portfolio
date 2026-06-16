import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Fallback to Home page for undefined routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
