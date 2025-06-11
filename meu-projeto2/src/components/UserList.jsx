import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../services/firebaseConnection'; // Importe a configuração do db

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os dados no Firestore
  const fetchUsers = async () => {
    setLoading(true); // Garante que o loading seja exibido ao recarregar
    try {
      const usersCollection = collection(db, "web3ead"); // 'usuarios' é o nome da sua coleção
      const data = await getDocs(usersCollection);

      const usersData = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setUsers(usersData);
    } catch (error) {
      console.error("Erro ao buscar usuários: ", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect para buscar os dados quando o componente é montado
  useEffect(() => {
    fetchUsers();
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez

  // Função para lidar com a edição (a ser implementada)
  const handleEdit = (userId) => {
    console.log("Editar usuário com ID:", userId);
    // Aqui você implementaria a lógica de edição.
    // Ex: Abrir um modal com os dados do usuário para edição.
  };

  // Função para lidar com a exclusão
  const handleDelete = async (userId) => {
    // Confirmação antes de excluir
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        const userDoc = doc(db, "usuarios", userId);
        await deleteDoc(userDoc);
        console.log("Usuário excluído com sucesso!");
        // Atualiza a lista de usuários após a exclusão
        fetchUsers(); // ou remova o usuário do estado local: setUsers(users.filter(user => user.id !== userId));
      } catch (error) {
        console.error("Erro ao excluir usuário: ", error);
      }
    }
  };

  // Exibe uma mensagem de carregamento enquanto os dados são buscados
  if (loading) {
    return <p>Carregando...</p>;
  }

  // Renderiza a tabela de usuários
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Tabela de Usuários</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={tableHeaderStyle}>Nome</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Data de Nascimento</th>
            <th style={tableHeaderStyle}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{user.nome}</td>
              <td style={tableCellStyle}>{user.email}</td>
              <td style={tableCellStyle}>{user.dataNascimento}</td>
              <td style={tableCellStyle}>
                <button onClick={() => handleEdit(user.id)} style={editButtonStyle}>
                  Editar
                </button>
                <button onClick={() => handleDelete(user.id)} style={deleteButtonStyle}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Estilos para a tabela (opcional, mas melhora a aparência)
const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #ddd'
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd'
};

const tableCellStyle = {
  padding: '12px',
  textAlign: 'left'
};

const editButtonStyle = {
  marginRight: '8px',
  padding: '8px 12px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const deleteButtonStyle = {
  padding: '8px 12px',
  backgroundColor: '#DC3545',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default UserTable;