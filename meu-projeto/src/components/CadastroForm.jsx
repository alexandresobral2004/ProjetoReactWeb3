import React, { useState, createContext, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import './style.css'

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const dadosCadastro = {
      nome: nome,
      email: email,
      senha: senha,
      dataNascimento: dataNascimento

    };

    // setUser(dadosCadastro);
    setUsers([...users, dadosCadastro]);

    //Opcional para limpar campos
    setNome('');
    setEmail('');
    setSenha('');
    setDataNascimento('');
  }


  useEffect(() => {
    listaUsers(users);

  }, [users])







  function listaUsers(users) {
    if (!users || !Array.isArray(users) || users.length === 0) {
      return <p>Não há usuários cadastrados</p>
    }
    else {
      // CORREÇÃO: Adicione 'return' aqui
      return (
        <ul>
          {/*
            O método .map() é a forma padrão de renderizar listas no React.
            Para cada 'user' no array 'users', ele retorna um elemento <li> JSX.
          */}
          {users.map((user) => (
            // A propriedade 'key' é CRUCIAL aqui. Ela deve ser uma string única e estável
            // para cada item na lista. O 'id' do usuário é perfeito para isso.
            // Se seu objeto não tem 'id', você pode usar o 'index' do map, mas com ressalvas.
            // Exemplo: <li key={user.id || index} className="user-card">
            <li key={user.nome} > {/* Assumindo que user.id existe e é único */}
              <p><strong>Nome:</strong> {user.nome}</p>
              <p><strong>Email:</strong> {user.email}</p>
              {/* ATENÇÃO: NUNCA EXIBA SENHAS NO FRONT-END POR SEGURANÇA! */}
              {/* <p><strong>Senha:</strong> {user.senha}</p> <-- REMOVA ESTA LINHA EM PROD */}
              <p><strong>Data de Nascimento:</strong> {user.dataNascimento}</p>
            </li>
          ))}
        </ul>
      );
    }
  }





  return (
    <>

      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" placeholder="Nome" onChange={handleNomeChange} value={nome} required />
        </div>
        <br />
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <br />
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
        </div>
        <br />
        <button className="buttonSubmit" type="submit">Cadastrar</button>
      </form>
      <br />
      <br />
      <div>
        <h2>Lista de Usuários</h2>
        {listaUsers(users)}
      </div>

    </>
  )
}
export default CadastroForm;