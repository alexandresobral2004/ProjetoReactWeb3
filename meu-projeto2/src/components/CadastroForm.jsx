import React, { useState } from 'react'
import './style.css'
import { db } from '../services/firebaseConnection'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);

  const handleNomeChange = (event) => {
    console.log(event.target.value);
    setNome(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('entrou')
    try {
      const docRef = await addDoc(collection(db, "web3ead"), {
        nome: nome,
        email: email,
        senha: senha,
        dataNascimento: dataNascimento

      });
    } catch (error) {
      console.log(error);
    }
    alert('Gravou com sucesso!')

  }




  return (

    // Usamos um Container para centralizar e controlar a largura máxima
    <Container className="mt-1" style={{ maxWidth: '700px' }}>
      {/* 2. O Card cria a borda e o fundo, dando um look profissional */}
      <Card>
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">Formulário de Cadastro</Card.Title>

          {/* O componente Form já vem com a tag <form> e funcionalidades extras */}
          <Form onSubmit={handleSubmit}>

            {/* 3. A Mágica do Formulário Horizontal */}
            {/* O 'as={Row}' transforma o Form.Group em uma linha do grid. */}
            {/* 'controlId' conecta o Label ao Input (bom para acessibilidade). */}
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalNome">
              {/* O Label ocupa 3 de 12 colunas em telas pequenas (sm) ou maiores */}
              <Form.Label column sm={3}>
                Nome:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required // Adicionando validação básica
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={3}>
                Email:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalSenha">
              <Form.Label column sm={3}>
                Senha:
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="password"
                  placeholder="Crie uma senha forte"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalDataNascimento">
              <Form.Label column sm={3}>
                Data de Nascimento:
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="date"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>

            {/* Centralizando o botão de envio */}
            <div className="d-grid gap-2 mt-4 w-25">
              <Button variant="primary" type="submit" size="md">
                Cadastrar
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </Container>

  )
}
export default CadastroForm;