import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './styles/theme';
import Home from './routes/Home.jsx';
import ListaChamados from './routes/ListaChamados.jsx';
import Login from './routes/Login.jsx';
import ErrorPage404 from './routes/ErrorPage404.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyAvatar from './components/PerfilAvatar/MyAvatar.jsx';
import reportWebVitals from './reportWebVitals';

function Layout({ children }) {
  return (
    <>
      <Header>
        <MyAvatar/>
      </Header>
      {children}
      <Footer />
    </>
  );
}

function AuthenticatedRoutes() {
  const isAuthenticated = localStorage.getItem('loggedIn') === 'true';

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Layout><Home /></Layout> : <Navigate to="/login" />} />
      <Route path="chamados" element={isAuthenticated ? <Layout><ListaChamados /></Layout> : <Navigate to="/login" />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Layout><ErrorPage404 /></Layout>} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Router>
          <AuthenticatedRoutes />
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
