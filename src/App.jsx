import { useState } from 'react'
import Home from './components/Home/Home'
import { Chamado } from './components/TelaAbrirChamado/Chamado/Chamado'
import { ListarChamados } from './components/TelaListarChamados/ListarChamados'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListarChamados/>
    </>
  )
}

export default App
