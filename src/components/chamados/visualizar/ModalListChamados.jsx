import React, { useEffect, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text } from "@chakra-ui/react";

export const ModalListChamados = ({ isOpen, onClose, idChamado, idUsuario }) => {
    const [chamadoDetails, setChamadoDetails] = useState({});
    const [usuarioDetails, setUsuarioDetails] = useState({});

    useEffect(() => {
        const getChamadoDetails = async (idChamado) => {
            try {
                const response = await fetch(
                    `https://647751049233e82dd53b7062.mockapi.io/api/usuarios/${idUsuario}/chamados/${idChamado}`
                );
                const data = await response.json();
                setChamadoDetails(data);
            } catch (error) {
                console.error("Erro ao buscar detalhes do chamado:", error);
            }
        };

        const getUsuarioDetails = async (idUsuario) => {
            try {
                const response = await fetch(
                    `https://647751049233e82dd53b7062.mockapi.io/api/usuarios/${idUsuario}`
                );
                const data = await response.json();
                setUsuarioDetails(data);
            } catch (error) {
                console.error("Erro ao buscar detalhes do usuário:", error);
            }
        };

        getChamadoDetails(idChamado);
        getUsuarioDetails(idUsuario);
    }, [idChamado, idUsuario]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Detalhes do Chamado #{idChamado}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontSize="lg" fontWeight="bold" mb={4}>
                        Informações Basicas do Chamado
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
                        Nome: {usuarioDetails.nome || "N/A"}
                        <br />
                        E-mail: {usuarioDetails.email || "N/A"}
                        <br />
                        Telefone: {usuarioDetails.telefone || "N/A"}
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
                        Dia preferencial para atendimento: {chamadoDetails.diaPreferencial || "N/A"}
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
