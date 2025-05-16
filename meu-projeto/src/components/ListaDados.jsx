import React, { useState } from 'react'



function ItemLista(props) {
  return <li>{props.valor}</li>
}





const ListaDados = (props) => {

  const itens = props.itens;

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }


  return (
    <>
      <label htmlFor="">{count}</label>
      <button onClick={handleClick}>Adicionar</button>


      <ul>
        {itens.map((item) => (
          <ItemLista key={item.id} valor={item.texto} />
        ))}
      </ul>

    </>
  )
}

export default ListaDados