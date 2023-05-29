import { useState } from "react";
import {
  useBreakpointValue,
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useColorMode,
  FormControl,
  Input,
  Textarea,
  Select,
  ModalFooter,
  FormErrorMessage
} from "@chakra-ui/react";

export function CardChamado({ imageSrc, title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { colorMode } = useColorMode();
  const [input, setInput] = useState('');
  const [showErrors, setShowErrors] = useState(false); // Estado para controlar a exibição dos erros
  const isDark = colorMode === "dark";
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");
  const [sector, setSector] = useState("");
  const [building, setBuilding] = useState("");
  const [contact, setContact] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [preferredDays, setPreferredDays] = useState("");
  const isError =
    summary === "" ||
    details === "" ||
    sector === "" ||
    building === "" ||
    contact === "" ||
    preferredTime === "" ||
    preferredDays === "";

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setShowErrors(false); // Reseta o estado de exibição dos erros ao fechar o modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário

    // Exemplo de validação de campo (resumo)
    if (!input) {
      setShowErrors(true); // Exibe as mensagens de erro
      return;
    }

    // Restante da lógica de envio do formulário
  };

  const imageWidth = isMobile ? "50px" : "100px";
  const imageHeight = isMobile ? "50px" : "100px";

  return (
    <Box
      borderWidth="2px"
      borderRadius="md"
      overflow="hidden"
      width={["100%", "100%", "564px", "564px"]}
      height={["100%", "100%", "170px", "170px"]}
      cursor="pointer"
      onClick={handleOpenModal}
      bg={isDark ? "gray.800" : "#F2FFEE"}
      marginLeft={isMobile ? 0 : "58px"}
      p={isMobile ? 2 : 0}
    >
      <Flex
        flexDirection={isMobile ? "column" : ["column", "column", "row", "row"]}
        justifyContent={isMobile ? "center" : "flex-start"}
        alignItems={isMobile ? "center" : "flex-start"}
      >
        <Image
          src={imageSrc}
          alt="Imagem"
          width={imageWidth}
          height={imageHeight}
          ml={isMobile ? 2 : 50}
          mt={isMobile ? 4 : 8}
        />
        <Box p={4} marginLeft={isMobile ? 0 : "30px"} mt={isMobile ? 2 : 4}>
          <Heading as="h3" fontSize={isMobile ? "16px" : "xl"} mb={2}>
            {title}
          </Heading>
          <Text>{content}</Text>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
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
                <Text fontSize={isMobile ? "14px" : "14px"} fontWeight="bold" mb={4}>
                  Abertura de Chamado
                </Text>
                <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                  Resumo:
                </Text>
                <FormControl isInvalid={showErrors && !summary}>
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
                  Detalhes
                </Text>
                <FormControl isInvalid={showErrors && !details}>
                  <Textarea name="details" placeholder="Digite detalhes sobre o chamado..." value={details} onChange={(e) => setDetails(e.target.value)} />
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
                  <Select name="sector" placeholder="Selecione um setor" value={sector} onChange={(e) => setSector(e.target.value)}>
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
                  <Input name="building" placeholder="Digite o prédio/sala" value={building} onChange={(e) => setBuilding(e.target.value)} />
                  {showErrors && !building && (
                    <FormErrorMessage>Informe um prédio ou uma sala</FormErrorMessage>
                  )}
                </FormControl>
              </Flex>
              <Flex direction="column" mb={4}>
                <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                  Ramal, Celular ou Whatsapp:
                </Text>
                <FormControl isInvalid={showErrors && !contact}>
                  <Input name="contact" placeholder="Digite o número" value={contact} onChange={(e) => setContact(e.target.value)} />
                  {showErrors && !contact && (
                    <FormErrorMessage>Informe um numero de contato</FormErrorMessage>
                  )}
                </FormControl>
              </Flex>
              <Flex direction="column" mb={4}>
                <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                  Horário preferencial para atendimento:
                </Text>
                <FormControl isInvalid={showErrors && !preferredTime}>
                  <Select name="preferredTime" placeholder="Selecione um horário" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  {showErrors && !preferredTime && (
                    <FormErrorMessage>Selecione um horário de atendimento</FormErrorMessage>
                  )}
                </FormControl>
              </Flex>
              <Flex direction="column" mb={4}>
                <Text fontSize={isMobile ? "12px" : "12px"} mb={2}>
                  Dias preferenciais para atendimento:
                </Text>
                <FormControl isInvalid={showErrors && !preferredDays}>
                  <Select name="preferredDays" placeholder="Selecione um dia" value={preferredDays} onChange={(e) => setPreferredDays(e.target.value)}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  {showErrors && !preferredDays && (
                    <FormErrorMessage>Selecione um dia preferencial</FormErrorMessage>
                  )}
                </FormControl>
              </Flex>
              {/* Restante do código do formulário */}
              {/* ... */}
              <ModalFooter>
                <Button colorScheme="blue" onClick={handleCloseModal}>
                  Fechar
                </Button>
                <Button type="submit" colorScheme="green" ml={2}>
                  Enviar
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
