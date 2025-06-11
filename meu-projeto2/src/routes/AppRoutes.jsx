import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from '../login';
import Home from '../pages/Home';
import Logout from '../logout';
import Layout from '../layouts/Layout';
import User from '../pages/User';

export const AppRoutes = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />


        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />

        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>


    </div>
  )
}
