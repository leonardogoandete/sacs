import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  Textarea,
  ModalFooter
} from "@chakra-ui/react";

export function CadastroModal({ title }) {
  const [titulo, setTitulo] = React.useState("");
  const [resumo, setResumo] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados de cadastro
    console.log("Título:", titulo);
    console.log("Resumo:", resumo);
    // Limpar os campos após o envio dos dados
    setTitulo("");
    setResumo("");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>aaa</Text>
          <InputGroup mt={4}>
            <InputLeftAddon children="Título" />
            <Input placeholder="Digite o título" />
          </InputGroup>
          <InputGroup mt={4}>
            <InputLeftAddon children="Resumo" />
            <Textarea placeholder="Digite o resumo" />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleCloseModal}>
            Fechar
          </Button>
          <Button colorScheme="green" ml={2}>
            Enviar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
