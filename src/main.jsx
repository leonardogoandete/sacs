import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import App from './App.jsx'
import { theme } from './styles/theme'
import { Header } from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
  <ColorModeProvider>
      <Header/>
        <App/>
      <Footer/>
      </ColorModeProvider>
  </ChakraProvider>
</React.StrictMode>,
)
