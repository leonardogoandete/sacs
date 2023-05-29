import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    Image,
    Textarea,
    Select,
    ModalFooter,
    FormErrorMessage,
    Flex,
    Text,
    useBreakpointValue,
    useToast
} from "@chakra-ui/react";

export function ModalChamado({ isOpen, onClose, imageSrc, title }) {
    const toast = useToast();
    const [summary, setSummary] = useState("");
    const [details, setDetails] = useState("");
    const [sector, setSector] = useState("");
    const [building, setBuilding] = useState("");
    const [contact, setContact] = useState("");
    const [preferredTime, setPreferredTime] = useState("");
    const [preferredDays, setPreferredDays] = useState("");
    const [showErrors, setShowErrors] = useState(false);
    const isMobile = useBreakpointValue({ base: true, lg: false });
    const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false);

    const validatePhoneNumber = (phoneNumber) => {
        setIsPhoneNumberInvalid(phoneNumber.length !== 11 || isNaN(phoneNumber));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !summary ||
            !details ||
            !sector ||
            !building ||
            !contact ||
            !preferredTime ||
            !preferredDays ||
            isPhoneNumberInvalid
        ) {
            setShowErrors(true);
            return;
        }

        // Restante da lógica de envio do formulário
        setSummary("");
        setDetails("");
        setSector("");
        setBuilding("");
        setContact("");
        setPreferredTime("");
        setPreferredDays("");
        setIsPhoneNumberInvalid(false);
        setShowErrors(false);

        toast({
            title: "Chamado aberto com sucesso!",
            status: "success",
            duration: 3000, // tempo em milissegundos
            isClosable: true,
            position: "top-left"
        });

        onClose(); // Fecha o modal
    };

    const handleCancel = () => {
        setSummary("");
        setDetails("");
        setSector("");
        setBuilding("");
        setContact("");
        setPreferredTime("");
        setPreferredDays("");
        setIsPhoneNumberInvalid(false);
        setShowErrors(false);

        onClose(); // Fecha o modal
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <Image
                    src={imageSrc}
                    alt="Imagem"
                    width={10}
                    height={10}
                    ml={4}
                    mt={4}
                />
                <ModalHeader ml={10} mt={-12}>{title}</ModalHeader>

                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <Flex direction="column" mb={4}>
                            <FormControl isInvalid={showErrors && !summary}>
                                <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                                    Resumo:
                                </Text>
                                <Input
                                    name="summary"
                                    placeholder="Digite o resumo"
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                />
                                {showErrors && !summary && (
                                    <FormErrorMessage>Insira um resumo</FormErrorMessage>
                                )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                                Detalhes:
                            </Text>
                            <FormControl isInvalid={showErrors && !details}>
                                <Textarea
                                    name="details"
                                    placeholder="Digite detalhes sobre o chamado..."
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                />
                                {showErrors && !details && (
                                    <FormErrorMessage>Insira os detalhes</FormErrorMessage>
                                )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                                Setor requisitante:
                            </Text>
                            <FormControl isInvalid={showErrors && !sector}>
                                <Select
                                    name="sector"
                                    placeholder="Selecione um setor"
                                    value={sector}
                                    onChange={(e) => setSector(e.target.value)}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                                {showErrors && !sector && (
                                    <FormErrorMessage>Selecione um setor</FormErrorMessage>
                                )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                                Prédio/Sala:
                            </Text>
                            <FormControl isInvalid={showErrors && !building}>
                                <Input
                                    name="building"
                                    placeholder="Digite o prédio/sala"
                                    value={building}
                                    onChange={(e) => setBuilding(e.target.value)}
                                />
                                {showErrors && !building && (
                                    <FormErrorMessage>
                                        Informe um prédio ou uma sala
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                                Ramal, Celular ou Whatsapp:
                            </Text>
                            <FormControl
                                isInvalid={
                                    showErrors && (!contact || isPhoneNumberInvalid)
                                }
                            >
                                <Input
                                    name="contact"
                                    placeholder="Digite o número"
                                    value={contact}
                                    onChange={(e) => {
                                        setContact(e.target.value);
                                        validatePhoneNumber(e.target.value);
                                    }}
                                />
                                {showErrors &&
                                    (!contact || !isNaN(contact) || isPhoneNumberInvalid) && (
                                        <FormErrorMessage>
                                            Insira um número de telefone válido com 11 dígitos
                                        </FormErrorMessage>
                                    )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                                Horário preferencial para atendimento:
                            </Text>
                            <FormControl isInvalid={showErrors && !preferredTime}>
                                <Select
                                    name="preferredTime"
                                    placeholder="Selecione um horário"
                                    value={preferredTime}
                                    onChange={(e) => setPreferredTime(e.target.value)}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                                {showErrors && !preferredTime && (
                                    <FormErrorMessage>
                                        Selecione um horário de atendimento
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                                Dias preferenciais para atendimento:
                            </Text>
                            <FormControl isInvalid={showErrors && !preferredDays}>
                                <Select
                                    name="preferredDays"
                                    placeholder="Selecione um dia"
                                    value={preferredDays}
                                    onChange={(e) => setPreferredDays(e.target.value)}
                                >
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                                {showErrors && !preferredDays && (
                                    <FormErrorMessage>
                                        Selecione um dia preferencial
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </Flex>
                        <ModalFooter>
                            <Button type="submit" color="white" bg="green">
                                Enviar
                            </Button>
                            <Button bg="red" color="white" onClick={handleCancel} ml={4}>
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
