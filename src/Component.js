import React, { useState  } from 'react'

export default function Componentes() {

  const [text, setText] = useState()
  const [upDate, setUpdate] = useState()

const textOnChange = (event) => {setText (event.target.value)

  }

  const buttonOnClick = () => {setUpdate (text)
  }
    
  return (
    <div>
        <input type ="text" value={text} onChange={textOnChange}/>
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto Actualizado: {upDate}</p>
    </div>
  )
}