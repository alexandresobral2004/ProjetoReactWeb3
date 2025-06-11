// src/layouts/Layout.js
// (Você pode manter o nome MainLayout.js se preferir)

import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Importe o Outlet!
import Sidebar from '../components/Sidebar';
import './Layout.css'; // Pode reusar o CSS anterior

function Layout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <main className="content-area">
        {/* 2. Use o Outlet aqui. Ele vai renderizar a página da rota filha */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;