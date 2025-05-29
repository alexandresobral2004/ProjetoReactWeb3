import { useState } from 'react'
import './App.css'
import Botao from './botao.jsx';
import Cartao from './components/cartao.jsx';
import CadastroForm from './components/CadastroForm.jsx';
import ListaDados from './components/ListaDados.jsx';
import { UserContextProvider } from './context/UserContext.jsx'
import CicloVida from './components/CicloVida.jsx';
import { Eventos } from './components/Eventos.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection, getDocs } from 'firebase/firestore'

const dados = [
  { id: 1, texto: "Monza" },
  { id: 2, texto: "Del Rey" },
  { id: 3, texto: "D20" },
  { id: 4, texto: "D10" },
  { id: 5, texto: "Chevete" }

]



function App(props) {
  const [count, setCount] = useState(0)

  const [user, setUser] = useState(null);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <>
      <UserContextProvider value={{ user, setUser }} >

        {/* <h1>Contador:{count}</h1> */}
        {/* <Botao text="+" onClick={increment} />

      <Botao text="-" onClick={decrement} /> */}


        {/* <Cartao nome="João" idade={40} imagemURL="/img/joao.png" >
        Meu Cartão
      </Cartao> */}

        <CadastroForm />

        {/* <CicloVida /> */}


        <Eventos nome="Visitante" />




      </UserContextProvider>
    </>
  )
}

export default App
