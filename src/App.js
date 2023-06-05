import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {  useBreakpointValue} from "@chakra-ui/react";
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Chamados } from './components/chamados/visualizar';
import { Login } from './components/Login';
import { NotFound } from './components/NotFound';
import { MenuLateral } from './components/Menu/MenuLateral';
import { Desktop } from './components/Menu/Desktop';
import Header from './components/Header/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');
  const isMobile = useBreakpointValue({ base: "true", md: "md" });

  return (
    <>
      <Header/>
      {isMobile? <MenuLateral/> : <Desktop/>}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/chamados" element={isLoggedIn ? <Chamados /> : <Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
