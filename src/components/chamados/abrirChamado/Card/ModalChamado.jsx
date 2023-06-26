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
    const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false);

    const validatePhoneNumber = (phoneNumber) => {
        setIsPhoneNumberInvalid(phoneNumber.length !== 4 && phoneNumber.length !== 11 || isNaN(phoneNumber));
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
            isClosable: true
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
                                <Text fontSize={"md"} mb={2}>
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
                            <Text fontSize={"md"} mb={2}>
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
                            <Text fontSize={"md"} mb={2}>
                                Setor requisitante:
                            </Text>
                            <FormControl isInvalid={showErrors && !sector}>
                                <Select
                                    name="sector"
                                    placeholder="Selecione um setor"
                                    value={sector}
                                    onChange={(e) => setSector(e.target.value)}
                                >
                                    <option value="001">Apoio Acadêmico</option>
                                    <option value="002">Auditoria</option>
                                    <option value="003">Biblioteca - Atendimento ao Usuário</option>
                                    <option value="004">Biblioteca - Atendimento ao Usuário &gt; Processamento  Técnico</option>
                                    <option value="033">CAE (Coordenadoria de Assistência Estudantil)</option>
                                    <option value="005">CIS</option>
                                    <option value="006">Comunicação e Eventos</option>
                                    <option value="050">CONARE</option>
                                    <option value="008">Coordenadoria de Ensino</option>
                                    <option value="010">Coordenadoria de Projetos Culturais</option>
                                    <option value="011">Coordenadoria de Projetos e Obras</option>
                                    <option value="036">Coordenadoria de Relações Empresariais / Núcleo de Estágios</option>
                                    <option value="012">COPERSE</option>
                                    <option value="013">Direção Geral</option>
                                    <option value="014">Direção Geral &gt; Gabinete da Direção</option>
                                    <option value="015">Diretoria de Administração</option>
                                    <option value="016">Diretoria de Administração &gt; Administração e Planejamento</option>
                                    <option value="017">Diretoria de Administração &gt; Compras e Licitações</option>
                                    <option value="018">Diretoria de Administração &gt; Orçamento e Finanças</option>
                                    <option value="009">Diretoria de Administração &gt; Coordenadoria de Infraestrutura</option>
                                    <option value="051">Diretoria de Administração &gt;  Núcleo de Transporte</option>
                                    <option value="007">Diretoria de Administração &gt; Coordenadoria de Almoxarifado e Patrimônio</option>
                                    <option value="019">Diretoria de Desenvolvimento Institucional</option>
                                    <option value="020">Diretoria de Extensão</option>
                                    <option value="022">Diretoria de Gestão de Pessoas</option>
                                    <option value="023">Diretoria de Pesquisa e Inovação</option>
                                    <option value="024">Diretoria de Pesquisa e Inovação</option>
                                    <option value="025">Diretoria de TI</option>
                                    <option value="026">Diretoria de TI &gt; Redes e Comunicações</option>
                                    <option value="027">Diretoria de TI &gt; Suporte Técnico</option>
                                    <option value="028">Diretoria de TI &gt; Operações e Sistemas</option>
                                    <option value="054">Docentes</option>
                                    <option value="029">Estacionamento</option>
                                    <option value="030">Gabinete de Professores (especificar ramal/prédio/andar/sala)</option>
                                    <option value="052">Grêmio Estudantil / Diretório Acadêmico</option>
                                    <option value="031">Incubadora Tecno-Social</option>
                                    <option value="032">Laboratório (especificar código ou prédio/andar/sala)</option>
                                    <option value="034">NAPNE</option>
                                    <option value="053">NEABI</option>
                                    <option value="037">Outra Localização</option>
                                    <option value="038">PET</option>
                                    <option value="039">Projeto Prelúdio</option>
                                    <option value="040">PRONATEC – Administrativo</option>
                                    <option value="041">PRONATEC – Secretaria</option>
                                    <option value="042">PROPEL</option>
                                    <option value="043">Recepção</option>
                                    <option value="044">Sala de Aula (especificar prédio/andar/sala)</option>
                                    <option value="045">Secretaria Acadêmica</option>
                                    <option value="046">Setor de Lazer e Desportos</option>
                                    <option value="047">Setor de Limpeza</option>
                                    <option value="048">Setor de Transporte</option>
                                    <option value="049">Vigilantes</option>
                                </Select>
                                {showErrors && !sector && (
                                    <FormErrorMessage>Selecione um setor</FormErrorMessage>
                                )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={"md"} mb={2}>
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
                            <Text fontSize={"md"} mb={2}>
                                Ramal ou Celular:
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
                                            Insira um número de contato válido com 4 ou 11 dígitos
                                        </FormErrorMessage>
                                    )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={"md"} mb={2}>
                                Horário preferencial para atendimento:
                            </Text>
                            <FormControl isInvalid={showErrors && !preferredTime}>
                                <Select
                                    name="preferredTime"
                                    placeholder="Selecione um horário"
                                    value={preferredTime}
                                    onChange={(e) => setPreferredTime(e.target.value)}
                                >
                                    <option value="1">Manhã</option>
                                    <option value="2">Tarde</option>
                                    <option value="3">Noite</option>
                                    <option value="4">Início da Manhã</option>
                                    <option value="5">Final da Manhã</option>
                                    <option value="6">Meio-dia / Horário de Almoço</option>
                                    <option value="7">Início da Tarde</option>
                                    <option value="8">Intervalo da Tarde</option>
                                    <option value="9">Final de Tarde</option>
                                    <option value="10">Início da Noite</option>
                                    <option value="11">Intervalo da Noite</option>
                                </Select>
                                {showErrors && !preferredTime && (
                                    <FormErrorMessage>
                                        Selecione um horário de atendimento
                                    </FormErrorMessage>
                                )}
                            </FormControl>
                        </Flex>
                        <Flex direction="column" mb={4}>
                            <Text fontSize={"md"} mb={2}>
                                Dias preferenciais para atendimento:
                            </Text>
                            <FormControl isInvalid={showErrors && !preferredDays}>
                                <Select
                                    name="preferredDays"
                                    placeholder="Selecione um dia"
                                    value={preferredDays}
                                    onChange={(e) => setPreferredDays(e.target.value)}
                                >
                                    <option value="1">Segunda</option>
                                    <option value="2">Terça</option>
                                    <option value="3">Quarta</option>
                                    <option value="4">Quinta</option>
                                    <option value="5">Sexta</option>
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
