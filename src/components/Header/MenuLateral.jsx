import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Image,
  Flex
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'

export function MenuLateral() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box>
        <Button
          aria-label="Abrir menu"
          onClick={handleDrawerToggle}
          top={-16}
          colorScheme="none"
          bg="none"
          zIndex={999}
          p={0}
          m={0}
          display={["flex","flex","none","none"]}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="img/Hamburger_icon.png"
            alt="Ícone Hamburger"
            boxSize="24px"
          />
        </Button>

      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <Box bg="#007018" py={2} px={4}>
              <Flex align="center" justify="space-between">
                <Image
                  src="img/sacs-v1.png"
                  alt="Logo"
                  boxSize="90px"
                  maxW="30%"
                  height="auto"
                  ml="10px"
                />
                <DrawerCloseButton />
              </Flex>
            </Box>
            <VStack spacing={4} p={4}>
              <Link to="/" onClick={handleDrawerToggle}>Inicio</Link>
              <Link to="/chamados" onClick={handleDrawerToggle}>Chamados</Link>
            </VStack>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}