import React from 'react';
import { SwitchRoutes } from './routes';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomeScene, SiteScene,SiteFormScene } from '@/scenes';
import { HeaderLayout } from '@/layout/HeaderLayout/header.layout';
import { BodyContainerLayout } from '@/layout/BodyContainerLayout/bodycontainer.layout';

export const AppRouter = () => {
    return (
      <Router>
        <HeaderLayout />
        <BodyContainerLayout>
        <Routes>
          <Route path={SwitchRoutes.root} element={<HomeScene />} />
          <Route path={SwitchRoutes.create} element={<SiteFormScene />} />
          <Route path={SwitchRoutes.site} element={<SiteScene />} />
          <Route path={SwitchRoutes.edit} element={<SiteFormScene />} />
          <Route path="*" element={<Navigate to="/" />} />      
        </Routes>
        </BodyContainerLayout>
      </Router>
    );
  };