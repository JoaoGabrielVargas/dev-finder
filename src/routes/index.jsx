import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

function Router() {
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/profile/:user" element={<Profile />} />
  </Routes>;
}

export default Router;
