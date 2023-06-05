import { useState } from "react";
import {
  useBreakpointValue,
  Box,
  Image,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ModalChamado } from "./ModalChamado";

export function CardChamado({ imageSrc, title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { colorMode } = useColorMode();
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const imageWidth = isMobile ? "50px" : "100px";
  const imageHeight = isMobile ? "50px" : "100px";
  const bgDark = colorMode === "dark" ? "#2D3748" : "#F2FFEE";
  const bgLight = colorMode === "dark" ? "gray.600" : "#EDF2ED";
  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={colorMode === "dark" ? bgDark : bgLight}
        p={4}
        maxW="400px" // Defina um valor adequado para a largura máxima do card
        mx="auto" // Centraliza o card horizontalmente
        display="flex" // Exibe os elementos em linha
        alignItems="center" // Centraliza verticalmente os elementos
        cursor="pointer" // Torna o card clicaver para abrir o modal
        onClick={handleOpenModal}
      >
        <Box mr={4}>
          <Image src={imageSrc} alt="Imagem" width={imageWidth} height={imageHeight} />
        </Box>
        <Box flex={1}>
          <Heading as="h4" fontSize="lg" mb={2}>
            {title}
          </Heading>
          <Text fontSize="sm">{content}</Text>
        </Box>
      </Box>

      <ModalChamado
        isOpen={isOpen}
        onClose={handleCloseModal}
        imageSrc={imageSrc}
        title={title}
      />
    </>
  );
}
