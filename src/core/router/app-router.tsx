import React from 'react';
import { SwitchRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomeScene } from '@/scenes';
import { HeaderLayout } from '@/layout/HeaderLayout/header.layout';

export const AppRouter = () => {
    return (
      <Router>
        <HeaderLayout />
        <Routes>
          <Route path={SwitchRoutes.root} element={<HomeScene />} />
          <Route path="*" element={<Navigate to="/" />} />      
        </Routes>
      </Router>
    );
  };