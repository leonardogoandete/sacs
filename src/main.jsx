import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import App from './App.jsx'
import { theme } from './styles/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Chamados from './routes/Chamados.jsx'
import ListaChamados from './routes/ListaChamados.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "chamados",
          element: <Chamados/>
        },
        {
          path: "meus-chamados",
          element: <ListaChamados/>
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <RouterProvider router={router} />
      </ColorModeProvider>
    </ChakraProvider>
</React.StrictMode>,
)
