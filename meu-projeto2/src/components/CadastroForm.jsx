import React, { useState } from 'react'
import './style.css'
import { db } from '../services/firebaseConnection'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.min.css';
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










  // function listaUsers(users) {
  //   if (!users || !Array.isArray(users) || users.length === 0) {
  //     return <p>Não há usuários cadastrados</p>
  //   }
  //   else {
  //     // CORREÇÃO: Adicione 'return' aqui
  //     return (
  //       <ul>
  //         {/*
  //           O método .map() é a forma padrão de renderizar listas no React.
  //           Para cada 'user' no array 'users', ele retorna um elemento <li> JSX.
  //         */}
  //         {users.map((user) => (
  //           // A propriedade 'key' é CRUCIAL aqui. Ela deve ser uma string única e estável
  //           // para cada item na lista. O 'id' do usuário é perfeito para isso.
  //           // Se seu objeto não tem 'id', você pode usar o 'index' do map, mas com ressalvas.
  //           // Exemplo: <li key={user.id || index} className="user-card">
  //           <li key={user.nome} > {/* Assumindo que user.id existe e é único */}
  //             <p><strong>Nome:</strong> {user.nome}</p>
  //             <p><strong>Email:</strong> {user.email}</p>
  //             {/* ATENÇÃO: NUNCA EXIBA SENHAS NO FRONT-END POR SEGURANÇA! */}
  //             {/* <p><strong>Senha:</strong> {user.senha}</p> <-- REMOVA ESTA LINHA EM PROD */}
  //             <p><strong>Data de Nascimento:</strong> {user.dataNascimento}</p>
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }





  return (


    <div className="container d-flex flex-column align-items-center"> {/* Container para centralizar e dar espaçamento */}
      <h2>Formulário de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        {/* Linha para Nome e Email */}
        <div className="row mb-12"> {/* mb83 adiciona margem inferior para espaçamento */}
          <div className="col-md-12"> {/* Ocupa metade da largura em telas médias e maiores */}
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
              // Campo obrigatório
              />
            </div>
          </div>
        </div>
        <div className="row mb-12">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"

              />
            </div>
          </div>
        </div>

        {/* Linha para Senha e Data de Nascimento */}
        <div className="row mb-12">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                className="form-control"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Crie uma senha"

              />
            </div>
          </div>
        </div>
        <div className="row mb-12">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input
                type="date"
                className="form-control"
                id="dataNascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}

              />
            </div>
          </div>
        </div>

        {/* Botão de Envio */}
        <button type="submit" className="btn btn-primary mt-5">Cadastrar</button>
      </form >
    </div >


  )
}
export default CadastroForm;