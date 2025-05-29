import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

export const RoutesApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
