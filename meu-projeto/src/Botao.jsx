import React from 'react'

import './EstiloBotao.css';

function Botao({ text, onClick, estilo }) {
  return (
    <div>
      <button className={estilo} onClick={onClick}>{text}</button>
    </div>

  )
}

export default Botao



// import React from 'react'

// export const Botao = ({ text, onClick }) => {
//   return (
//     <div>
//       <button onClick={onClick}>{text}</button>
//     </div>
//   )
// }
