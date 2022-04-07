import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Admin, ErrorPage } from './routes';

const View = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="admin" element={<Admin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default View;
