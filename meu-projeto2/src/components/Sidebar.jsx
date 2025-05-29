// src/components/Sidebar.js

import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Use NavLink para estilos ativos
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importando ícones do Bootstrap
import './Sidebar.css'; // Nosso CSS customizado

function Sidebar() {
  return (
    // A tag <nav> é semanticamente correta para um bloco de navegação
    <nav className="sidebar-container bg-light">
      <div className="sidebar-header">
        <h3>Meu App</h3>
      </div>

      {/* Usamos o componente Nav do react-bootstrap.
        A classe "flex-column" é a chave para empilhar os links verticalmente.
      */}
      <Nav className="flex-column ">
        {/*
          Usamos o componente NavLink do react-router-dom.
          Ele adiciona automaticamente uma classe 'active' ao link da página atual.
          A prop 'as={NavLink}' instrui o react-bootstrap a renderizar o Nav.Link como um NavLink.
        */}
        <Nav.Link as={NavLink} to="/home" className="sidebar-link">
          <i className="bi bi-house-door-fill me-2"></i> {/* Ícone */}
          Página Inicial
        </Nav.Link>

        <Nav.Link as={NavLink} to="/dashboard" className="sidebar-link">
          <i className="bi bi-speedometer2 me-2"></i>
          Dashboard
        </Nav.Link>

        <Nav.Link as={NavLink} to="/profile" className="sidebar-link">
          <i className="bi bi-person-circle me-2"></i>
          Perfil
        </Nav.Link>

        <Nav.Link as={NavLink} to="/settings" className="sidebar-link">
          <i className="bi bi-gear-fill me-2"></i>
          Configurações
        </Nav.Link>
      </Nav>
    </nav>
  );
}

export default Sidebar;