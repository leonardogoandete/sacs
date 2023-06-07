import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Flex,
  Stack,
  Heading,
  Checkbox,
  useColorMode,
  useToast,
} from '@chakra-ui/react';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se o email e senha são válidos
    if (email === 'leo@leo.com' && password === 'leo') {
      localStorage.setItem('usuario', '1');
      localStorage.setItem('usuario_nome', 'Leonardo');
      console.log('Autenticação bem-sucedida usando leo');
      localStorage.setItem('loggedIn', 'true');
      window.location.href=("/");
    } else if (email === 'laika@laika.com' && password === 'laika') {
      localStorage.setItem('usuario', '2');
      localStorage.setItem('usuario_nome', 'Laika');
      console.log('Autenticação bem-sucedida usando laika');
      localStorage.setItem('loggedIn', 'true');
      window.location.href=("/");
    } else {
      // Credenciais inválidas, exibir mensagem de erro
      console.log('Credenciais inválidas');
      toast({
        title: 'Credenciais inválidas',
        description: 'Verifique seu email e senha.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      <Flex minH={'81vh'} align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Image
              src="img/sacs-v1.png"
              alt="Logo"
              maxW="200px"
              mx="auto"
              mb={8}
              bg={isDark ? '' : '#efecec'}
            />
          </Stack>
          <Box
            rounded={'lg'}
            bg={isDark ? '#2D3748' : '#efecec'}
            color={isDark ? 'white' : 'black'}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <Heading fontSize={'2xl'} textAlign={'center'}>
                LOGIN
              </Heading>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Lembrar-me</Checkbox>
                </Stack>
                <Button
                  onClick={handleSubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
