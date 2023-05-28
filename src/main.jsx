import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import { theme } from './styles/theme'
import { Header } from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <div style={{ paddingBottom: "110px" }}>
      <Header />
      <div style={{ marginTop: "172px" }}>
        <App />
      </div>
      <Footer style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }} />
    </div>
  </ChakraProvider>
</React.StrictMode>,
)
