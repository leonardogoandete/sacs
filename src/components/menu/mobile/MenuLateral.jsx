import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
  Image,
  Flex,
  useBreakpointValue
} from "@chakra-ui/react";

export function MenuLateral() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box>
      {isMobile &&
        <Button
          aria-label="Abrir menu"
          onClick={handleDrawerToggle}
          top={0}
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
      }

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
              <Link href="/">Inicio</Link>
              <Link href="/chamados">Chamados</Link>
              <Link href="/meus-chamados">Meus Chamados</Link>
            </VStack>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
