import React, { useState } from 'react'

export const Eventos = ({ }) => {

  const [nome, setNome] = useState('Visitante');


  function Entrar() {
    setNome({ nome: 'Alexandre Rocha' })
  }

  return (
    <>

      <h2>O nome é {nome}</h2>
      <br />
      <button onClick={(e) => { setNome('Alexandre') }}>Entrar</button >
      <br /><br />
      <button onClick={() => { setNome('') }}>Sair</button>
    </>
  )
}
