// src/pages/LogoutPage.js

import React, { useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../src/services/firebaseConnection'; // Importe sua instância de autenticação do Firebase
import 'bootstrap-icons/font/bootstrap-icons.css';

function Logout() {

  // O useEffect é o local perfeito para "efeitos colaterais",
  // como chamar uma API ou, neste caso, a função de logout.
  // O array vazio `[]` garante que este efeito rode apenas uma vez,
  // quando o componente é montado.
  useEffect(() => {
    const performLogout = async () => {
      try {
        await signOut(auth);

      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      }
    };

    performLogout();
  }, []); // Array de dependências vazio

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row>
        <Col>
          <Card className="text-center shadow-sm" style={{ width: '25rem' }}>
            <Card.Body className="p-5">
              <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '3rem' }}></i>
              <Card.Title as="h2" className="mt-3">
                Você Saiu do Sistema!
              </Card.Title>
              <Card.Text className="text-muted mt-2">
                Sua sessão foi encerrada com segurança. Esperamos ver você novamente em breve.
              </Card.Text>
              <Button
                as={Link}          // Renderiza o Botão como um componente Link
                to="/login"         // Destino do link
                variant="primary"   // Estilo do botão
                className="mt-4"
                size="lg"
              >
                Logar Novamente
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Logout;