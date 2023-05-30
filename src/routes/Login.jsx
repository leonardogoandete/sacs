import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Image, Flex, Stack, Heading, Checkbox, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar se o email e senha são válidos
        if (email === 'leo@leo.com' && password === 'leo') {
            // Autenticação bem-sucedida, armazenar no localStorage
            localStorage.setItem('loggedIn', 'true');
            console.log('Autenticação bem-sucedida');
            navigate('/'); // Redirecionar para a página inicial ("/")
        } else {
            // Credenciais inválidas, exibir mensagem de erro
            console.log('Credenciais inválidas');
        }
    };

    return (
        <>
            <Header />
            <Flex
                minH={'81vh'}
                align={'center'}
                justify={'center'}
                bg={isDark ? "dark.700": "white"}
                color={isDark ? "black" : "white"}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Image src="img/sacs-v1.png" alt="Logo" maxW="200px" mx="auto" mb={8} bg={isDark? "":"green.500"}/>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={isDark ? "dark": "green.500"}
                        color={isDark ? "white" : "black"}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <Heading fontSize={'2xl'} textAlign={'center'}>LOGIN</Heading>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Senha</FormLabel>
                                <Input
                                    type="password"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                </Stack>
                                <Button
                                    onClick={handleSubmit}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Entrar
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <Footer />
        </>
    );
}

export default Login;
