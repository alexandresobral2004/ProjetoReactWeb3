import React, { useState, createContext, useContext } from 'react'
import { UserContext } from '../context/UserContext';

function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleNomeChange = (event) => {
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

    setUser(dadosCadastro);
    console.log(user);

    //Opcional para limpar campos
    setNome('');
    setEmail('');
    setSenha('');
    setDataNascimento('');

    console.log(dadosCadastro)
  }



  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" placeholder="Nome" onChange={handleNomeChange} value={nome} required />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>

      <div>
        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  )
}
export default CadastroForm;