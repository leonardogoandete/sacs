import { useState } from "react";
import { useBreakpointValue, Box, Flex, Image, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";

export function CardChamado({ imageSrc, title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useBreakpointValue({ base: true, lg: false });

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };

    const imageWidth = isMobile ? "50px" : "100px";
    const imageHeight = isMobile ? "50px" : "100px";
  
    return (
      <Box
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        width={["100%", "100%", "564px", "564px"]}
        height={["100%", "100%", "170px", "170px"]}
        marginBottom={4}
        cursor="pointer"
        onClick={handleOpenModal}
        bg="#F2FFEE"
        marginLeft={isMobile ? 0 : "58px"}
        p={isMobile ? 2 : 0}
      >
        <Flex flexDirection={isMobile ? "column" : ["column", "column", "row", "row"]} justifyContent={isMobile ? "center" : "flex-start"} alignItems={isMobile ? "center" : "flex-start"}>
          <Image src={imageSrc} alt="Imagem" width={imageWidth} height={imageHeight} ml={isMobile ? 2 : 50} mt={isMobile ? 4 : 8} />
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
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{content}</Text>
            </ModalBody>
            <Button colorScheme="blue" onClick={handleCloseModal} mt={4}>
              Fechar
            </Button>
          </ModalContent>
        </Modal>
      </Box>
    );
}