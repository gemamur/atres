import React from 'react';
import { SwitchRoutes } from './routes';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomeScene } from '@/scenes';
import { HeaderLayout } from '@/layout/HeaderLayout/header.layout';
import { BodyContainerLayout } from '@/layout/BodyContainerLayout/bodycontainer.layout';

export const AppRouter = () => {
    return (
      <Router>
        <HeaderLayout />
        <BodyContainerLayout>
        <Routes>
          <Route path={SwitchRoutes.root} element={<HomeScene />} />
          <Route path="*" element={<Navigate to="/" />} />      
        </Routes>
        </BodyContainerLayout>
      </Router>
    );
  };