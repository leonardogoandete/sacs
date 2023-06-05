import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  useToast,
  FormErrorMessage
} from '@chakra-ui/react';

function ModalPerfil({ isOpen, onClose }) {
  const toast = useToast();
  const [nome, setNome] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome && nome !== '') {
      setShowErrors(true);
      return;
    }

    // Restante da lógica de envio do formulário
    setNome('');

    toast({
      title: 'Perfil atualizado!',
      status: 'success',
      duration: 3000, // tempo em milissegundos
      isClosable: true,
      position: 'top-left',
    });

    onClose(); // Fecha o modal
  };// fim handleSubmit

  const handleCancel = () => {
    setNome("");
    onClose(); // Fecha o modal
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Atualizar Perfil</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isInvalid={showErrors && !nome}>
                <FormLabel>Nome</FormLabel>
                <Input
                  placeholder="Digite seu nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                {showErrors && !nome && (
                  <FormErrorMessage>Insira um nome</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Digite seu email" />
              </FormControl>
              <FormControl>
                <FormLabel>Número de Contato</FormLabel>
                <Input placeholder="Digite seu número de contato" />
              </FormControl>
            </Stack>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button bg="green" mr={3} type="submit" onClick={handleSubmit}>
            Salvar
          </Button>
          <Button bg="red" onClick={handleCancel}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalPerfil;