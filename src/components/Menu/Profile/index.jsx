import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPerson } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import {
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Flex,
    Stack,
    Button,
    Center,
    MenuDivider,
    useBreakpointValue
} from "@chakra-ui/react";
import ModalPerfil from "./modal/ModalPerfil";

export const Profile = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    const [isPerfilModalOpen, setIsPerfilModalOpen] = useState(false);
    const nomePerfil = localStorage.getItem('usuario_nome');
    const loggedIn = localStorage.getItem('loggedIn');
    const navigate = useNavigate();

    const handlePerfilModalOpen = () => {
        setIsPerfilModalOpen(true);
    };

    const handlePerfilModalClose = () => {
        setIsPerfilModalOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('usuario');
        localStorage.removeItem('usuario_nome');
        navigate("/login");
    };

    return (
        <Box mr={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={4}>
                        {loggedIn === "true" && (
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
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            bg="white"
                                            size={'2xl'}
                                            src={'https://joesch.moe/api/v1/random'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>{nomePerfil}</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem icon={<BsPerson />} onClick={handlePerfilModalOpen}>Perfil</MenuItem>
                                    <MenuItem icon={<HiOutlineLogout />} onClick={handleLogout}>Sair</MenuItem>
                                </MenuList>
                            </Menu>
                        )}
                    </Stack>
                </Flex>
            </Flex>
            <ModalPerfil isOpen={isPerfilModalOpen} onClose={handlePerfilModalClose} />
        </Box>
    );
}
