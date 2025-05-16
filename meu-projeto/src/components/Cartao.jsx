import React from 'react'


function Cartao({ imagemURL, nome, idade, children }) {
  return (
    <div style={
      {
      border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', width:
        '200px'
    }}>
      <img src={imagemURL} alt={`Foto de ${nome}`} style={{ width: '100%', borderRadius: '5px' }} />
      <h3>{nome}</h3>
      <p>{idade} anos</p>

      {children}



    </div>
  )
}

export default Cartao