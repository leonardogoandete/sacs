import { useState } from 'react'
import Home from './components/Home/Home'
import { Chamado } from './components/Chamado/Chamado'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Home/>
  )
}

export default App
