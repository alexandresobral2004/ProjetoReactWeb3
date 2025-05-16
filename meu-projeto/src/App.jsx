import { useState } from 'react'
import './App.css'
import Botao from './botao';
import Cartao from './components/cartao';
import CadastroForm from './components/CadastroForm';
import ListaDados from './components/ListaDados';


const dados = [
  { id: 1, texto: "Monza" },
  { id: 2, texto: "Del Rey" },
  { id: 3, texto: "D20" },
  { id: 4, texto: "D10" },
  { id: 5, texto: "Chevete" }

]



function App(props) {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <>
      {/* <h1>Contador:{count}</h1> */}
      {/* <Botao text="+" onClick={increment} />

      <Botao text="-" onClick={decrement} /> */}


      {/* <Cartao nome="João" idade={40} imagemURL="/img/joao.png" >
        Meu Cartão
      </Cartao> */}

      {/* <CadastroForm /> */}

      <ListaDados itens={dados} />





    </>
  )
}

export default App
