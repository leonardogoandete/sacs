import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineInbox,
  AiOutlinePhone
} from "react-icons/ai";
import {
  Flex,
  Image,
  Button,
  Icon,
  Spacer,
  chakra,
  useBreakpointValue,
  useColorMode
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Profile } from './Profile';
import { MenuLateral } from './MenuLateral';

const HeaderStyle = chakra("header", {
  baseStyle: {
    width: "100%",
  },
});

export const Desktop = () => {
  const isMobile = useBreakpointValue({ base: "base", md: "md" });
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn'));

  const handleLogout = () => {
    // Realize o logout e atualize o estado de autenticação
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  return (
    <HeaderStyle>
      <Flex
        align="center"
        justify="space-between"
        bg="#007018"
        p={2}
        color="black"
        top={0}
        left={0}
        right={0}
        zIndex={1}
      >
        {(!isMobile || isMobile === "md") && (
          <Image
            src="img/sacs-v1.png"
            alt="Logo"
            boxSize={"8%"}
            maxW="100%"
            height="auto"
            ml={4}
          />
        )}
        <Flex ml="auto" align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link to="/">
              <Button
                mr={4}
                variant="ghost"
                leftIcon={<Icon as={AiOutlineHome} boxSize={5} />}
              >
                Início
              </Button>
            </Link>
            <Link to="/chamados">
              <Button
                mr={4}
                variant="ghost"
                leftIcon={<Icon as={AiOutlineInbox} boxSize={5} />}
              >
                Meus Chamados
              </Button>
            </Link>
            {/* <Link to="/contato">
              <Button
                variant="ghost"
                leftIcon={<Icon as={AiOutlinePhone} boxSize={5} />}
              >
                Contato
              </Button>
            </Link> */}
          </Flex>
          <MenuLateral />
        </Flex>
        {isMobile && (
          <Image
            display={["flex", "flex", "none", "none"]}
            src="img/sacs-v1.png"
            alt="Logo"
            boxSize={isMobile ? "90px" : "174px"}
            maxW="100%"
            height="auto"
            ml="0"
          />
        )}
        <Spacer />
        <Button onClick={toggleColorMode} bg={'none'} mt={isMobile ? 1 : 4}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        {isLoggedIn && <Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} size={isMobile ? "md" : "lg"} onLogout={handleLogout} />}
      </Flex>
    </HeaderStyle>
  );
};
