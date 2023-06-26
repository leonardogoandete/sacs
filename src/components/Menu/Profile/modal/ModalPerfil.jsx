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
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false);

  const validatePhoneNumber = (phoneNumber) => {
    setIsPhoneNumberInvalid(phoneNumber.length !== 4 && phoneNumber.length !== 11 || isNaN(phoneNumber));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nome ||
      !email ||
      !contato
    ) {
      setShowErrors(true);
      return;
    }

    // Restante da lógica de envio do formulário
    setNome("");
    setEmail("");
    setContato("");

    toast({
      title: 'Perfil atualizado!',
      status: 'success',
      duration: 3000, // tempo em milissegundos
      isClosable: true
    });

    onClose(); // Fecha o modal
  };// fim handleSubmit

  const handleCancel = () => {
    setNome("");
    setEmail("");
    setContato("");
    onClose(); // Fecha o modal
  };

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
                <FormLabel>Nome:</FormLabel>
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


              <FormControl isInvalid={showErrors && !email}>
                <FormLabel>Email:</FormLabel>
                <Input
                  type='email'
                  placeholder="Digite seu email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {showErrors && !email && (
                  <FormErrorMessage>Insira um email</FormErrorMessage>
                )}
              </FormControl>

              <FormControl 
              isInvalid={
                showErrors && (!contato || isPhoneNumberInvalid)
                }
              >
                <FormLabel>Número de contato:</FormLabel>
                <Input
                  placeholder="Digite seu número de contato"
                  name="contato"
                  value={contato}
                  onChange={(e) => {
                    setContato(e.target.value);
                    validatePhoneNumber(e.target.value);
                  }}
                />
                {showErrors && 
                (!contato || !isNaN(contato) || isPhoneNumberInvalid) && (
                  <FormErrorMessage>
                    Insira um número de contato válido com 4 ou 11 dígitos
                  </FormErrorMessage>
                )}
              </FormControl>


              {/* <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Digite seu email" />
              </FormControl>
              <FormControl>
                <FormLabel>Número de Contato</FormLabel>
                <Input placeholder="Digite seu número de contato" />
              </FormControl> */}
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