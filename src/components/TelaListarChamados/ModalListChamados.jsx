import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text } from "@chakra-ui/react";

const ModalListChamados = ({ isOpen, onClose, numeroChamado }) => {
  // Função para obter os detalhes do chamado com base no número do chamado
  const getChamadoDetails = (numeroChamado) => {
    // Aqui você pode fazer uma requisição para obter os detalhes do chamado usando o número do chamado fornecido
    // Por enquanto, vamos retornar um objeto vazio como exemplo
    return {};
  };

  // Obter os detalhes do chamado
  const chamadoDetails = getChamadoDetails(numeroChamado);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detalhes do Chamado #{numeroChamado}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Basic Ticket Information
          </Text>
          <Text>
            Status do Ticket: {chamadoDetails.status || "N/A"}
            <br />
            Departamento: {chamadoDetails.departamento || "N/A"}
            <br />
            Data de Criação: {chamadoDetails.dataCriacao || "N/A"}
          </Text>

          <Text fontSize="lg" fontWeight="bold" mt={6} mb={4}>
            Informações do Usuário
          </Text>
          <Text>
            Nome: {chamadoDetails.nomeUsuario || "N/A"}
            <br />
            E-mail: {chamadoDetails.emailUsuario || "N/A"}
            <br />
            Telefone: {chamadoDetails.telefoneUsuario || "N/A"}
          </Text>

          <Text fontSize="lg" fontWeight="bold" mt={6} mb={4}>
            Detalhes do Chamado
          </Text>
          <Text>
            Setor do Requisitante: {chamadoDetails.setorRequisitante || "N/A"}
            <br />
            Prédio/Sala: {chamadoDetails.predioSala || "N/A"}
            <br />
            Ramal/Celular/WhatsApp: {chamadoDetails.contatoUsuario || "N/A"}
            <br />
            Horário preferencial de atendimento: {chamadoDetails.horarioPreferencial || "N/A"}
            <br />
            Dias preferenciais para atendimento: {chamadoDetails.diasPreferenciais || "N/A"}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalListChamados;
