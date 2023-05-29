import React, { useEffect, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text } from "@chakra-ui/react";

const ModalListChamados = ({ isOpen, onClose, numeroChamado }) => {
    const [chamadoDetails, setChamadoDetails] = useState({});

    useEffect(() => {
        const getChamadoDetails = async (numeroChamado) => {
            try {
                const response = await fetch(`http://192.168.0.4:8000/api/chamados/${numeroChamado}`);
                const data = await response.json();
                setChamadoDetails(data);
            } catch (error) {
                console.error("Erro ao buscar detalhes do chamado:", error);
            }
        };

        getChamadoDetails(numeroChamado);
    }, [numeroChamado]);

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
                        Status do Chamado: {chamadoDetails.status || "N/A"}
                        <br />
                        Departamento: {chamadoDetails.departamento || "N/A"}
                        <br />
                        Data de Criação: {chamadoDetails.dataAbertura || "N/A"}
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
                        Prédio/Sala: {chamadoDetails.local || "N/A"}
                        <br />
                        Ramal/Celular/WhatsApp: {chamadoDetails.contato || "N/A"}
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
