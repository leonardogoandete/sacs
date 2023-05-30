import { useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function MenuLateral() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box>
      <IconButton
        aria-label="Toggle Menu"
        icon={<HamburgerIcon />}
        onClick={handleDrawerToggle}
        display={["block", "block", "none", "none"]} // Mostrar o ícone do hamburger apenas em telas menores
        top={0}
        bg={"none"}
        zIndex={999}
      />

      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <VStack spacing={4} p={4}>
              <Link href="/home">Inicio</Link>
              <Link href="/chamados">Chamados</Link>
              <Link href="/meus-chamados">Meus Chamados</Link>
            </VStack>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}