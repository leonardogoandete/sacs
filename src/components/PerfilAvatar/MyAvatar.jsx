import React, { useState } from 'react';
import { Avatar, Menu, MenuButton, MenuList, MenuItem, useColorMode, Box, Flex, Stack, Button, Center, MenuDivider, useBreakpointValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsPersonFillGear } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import ModalPerfil from "./modal/ModalPerfil";


function MyAvatar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [isPerfilModalOpen, setIsPerfilModalOpen] = useState(false);

  const handlePerfilModalOpen = () => {
    setIsPerfilModalOpen(true);
  };

  const handlePerfilModalClose = () => {
    setIsPerfilModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn'); // Remove a chave 'loggedIn' do localStorage
    // Adicione aqui qualquer outra lógica de logout que você precise

    // Redirecionar para a página de login ou fazer alguma outra ação após o logout
    window.location.href = '/login';
  };

  return (
    <Box px={30}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={4}>
            <Button onClick={toggleColorMode} bg={'none'} mt={isMobile ? 1 : 4}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  bg="white"
                  size={isMobile ? 'md' : 'lg'}
                  src={'https://joesch.moe/api/v1/random'}
                />
              </MenuButton>
              <MenuList alignItems={'center'} color={isDark ? "white" : "black"}>
                <br />
                <Center>
                  <Avatar
                    bg={isDark ? "white" : "gray.100"}
                    size={'2xl'}
                    src={'https://joesch.moe/api/v1/random'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Leonardo</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem icon={<BsPersonFillGear />} onClick={handlePerfilModalOpen}>Perfil</MenuItem>
                <MenuItem icon={<HiOutlineLogout />} onClick={handleLogout}>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
      <ModalPerfil isOpen={isPerfilModalOpen} onClose={handlePerfilModalClose} />
    </Box>
  );
}

export default MyAvatar;
