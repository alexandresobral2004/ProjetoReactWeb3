// src/components/Sidebar.js

import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Use NavLink para estilos ativos
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importando ícones do Bootstrap
import './Sidebar.css'; // Nosso CSS customizado
import Collapse from 'react-bootstrap/Collapse'; // Importe o Collapse!

function Sidebar() {

  // 1. Estado para controlar a visibilidade do submenu de usuários
  const [usuariosOpen, setUsuariosOpen] = useState(false);

  return (
    // A tag <nav> é semanticamente correta para um bloco de navegação
    // <nav className="sidebar-container bg-light">
    //   <div className="sidebar-header">
    //     <h3>Meu App</h3>
    //   </div>

    //   {/* Usamos o componente Nav do react-bootstrap.
    //     A classe "flex-column" é a chave para empilhar os links verticalmente.
    //   */}
    //   <Nav className="flex-column ">
    //     {/*
    //       Usamos o componente NavLink do react-router-dom.
    //       Ele adiciona automaticamente uma classe 'active' ao link da página atual.
    //       A prop 'as={NavLink}' instrui o react-bootstrap a renderizar o Nav.Link como um NavLink.
    //     */}
    //     <Nav.Link as={NavLink} to="/home" className="sidebar-link">
    //       <i className="bi bi-house-door-fill me-2"></i> {/* Ícone */}
    //       Página Inicial
    //     </Nav.Link>

    //     <Nav.Link as={NavLink} to="/dashboard" className="sidebar-link">
    //       <i className="bi bi-speedometer2 me-2"></i>
    //       Dashboard
    //     </Nav.Link>

    //     <NavDropdown
    //       title={
    //         <>
    //           <i className="bi bi-gear "></i> {/* Ícone para o item pai */}
    //           Usuários
    //         </>
    //       }
    //       id="settings-nav-dropdown" // ID único é importante para acessibilidade
    //       className="sidebar-dropdown" // Classe personalizada para estilizar o dropdown em si
    //     >

    //       <NavDropdown.Item as={NavLink} to="/settings/privacy" className="sidebar-dropdown-item">
    //         Novo
    //       </NavDropdown.Item>
    //       {/* <NavDropdown.Divider /> Um separador visual */}

    //     </NavDropdown>

    //     <Nav.Link as={NavLink} to="/settings" className="sidebar-link">
    //       <i className="bi bi-gear-fill me-2"></i>
    //       Configurações
    //     </Nav.Link>
    //     <Nav.Link as={NavLink} to="/logout" className="sidebar-link">
    //       <i className="bi bi-gear-fill me-2"></i>
    //       Logout
    //     </Nav.Link>
    //   </Nav>
    // </nav>
    <nav className="sidebar-container bg-light">
      <div className="sidebar-header">
        <h3>Meu App</h3>
      </div>

      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/home" className="sidebar-link">
          <i className="bi bi-house-door-fill me-2"></i>
          Página Inicial
        </Nav.Link>

        <Nav.Link as={NavLink} to="/dashboard" className="sidebar-link">
          <i className="bi bi-speedometer2 me-2"></i>
          Dashboard
        </Nav.Link>

        {/* --- Início da Lógica do Menu Acordeão --- */}

        {/* 2. O gatilho que altera o estado. */}
        {/* - onClick: inverte o valor de 'usuariosOpen' (true -> false, false -> true) */}
        {/* - aria-controls: por acessibilidade, aponta para o ID do conteúdo que ele controla */}
        {/* - aria-expanded: informa a leitores de tela se a seção está expandida */}
        <Nav.Link
          onClick={() => setUsuariosOpen(!usuariosOpen)}
          aria-controls="usuarios-collapse-menu"
          aria-expanded={usuariosOpen}
          className="sidebar-link d-flex justify-content-between align-items-center" // Usando flex para alinhar o ícone da seta
        >
          <div>
            <i className="bi bi-people-fill me-2"></i> {/* Ícone de usuários */}
            Usuários
          </div>
          {/* Ícone de seta que muda dependendo do estado */}
          <i className={`bi bi-chevron-down transition-icon ${usuariosOpen ? 'rotate-180' : ''}`}></i>
        </Nav.Link>

        {/* 3. O conteúdo colapsável */}
        {/* - A prop 'in' recebe o estado. O conteúdo só será exibido se 'usuariosOpen' for true. */}
        <Collapse in={usuariosOpen}>
          <div id="usuarios-collapse-menu">
            {/* Adicionamos uma div e uma classe para aplicar um recuo (padding-left) */}
            <div className="submenu-container">
              <Nav.Link as={NavLink} to="/user" className="sidebar-link submenu-item">
                Novo
              </Nav.Link>
              <Nav.Link as={NavLink} to="/users/list" className="sidebar-link submenu-item">
                Listar
              </Nav.Link>
            </div>
          </div>
        </Collapse>

        {/* --- Fim da Lógica do Menu Acordeão --- */}

        <Nav.Link as={NavLink} to="/settings" className="sidebar-link">
          <i className="bi bi-gear-fill me-2"></i>
          Configurações
        </Nav.Link>

        <Nav.Link as={NavLink} to="/logout" className="sidebar-link">
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </Nav.Link>
      </Nav>
    </nav>

  );
}

export default Sidebar;