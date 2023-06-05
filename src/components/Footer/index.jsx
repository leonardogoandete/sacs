import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Image,
  Center,
  Text,
  useBreakpointValue,
  chakra
} from "@chakra-ui/react";

export const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const FooterStyle = chakra("footer", {
    baseStyle: {
      width: "100%",
      bg: "#007018",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: isMobile ? "column" : "row",
    },
  });

  return (
    <FooterStyle>
      <Box p={4} height={isMobile ? "auto" : "100px"} zIndex={1} mb={4}>
        <Flex flexDirection={isMobile ? "column" : "row"} alignItems={isMobile ? "center" : "flex-start"} justifyContent="center">
          <Text textAlign="center" fontSize={isMobile ? "10px" : "sm"} color="white" mb={isMobile ? 2 : 0}>
            &copy; {new Date().getFullYear()} SACS - Sistema de Atendimento a Chamados e Suporte. Todos os direitos reservados.
          </Text>
        </Flex>
        <Flex flexDirection={isMobile ? "column" : "row"} alignItems="center" justifyContent="center">
          <Image src="img/ifrs-poa.png" alt="Logo IFRS POA" mt={2} maxW="100%" />
        </Flex>
      </Box>
    </FooterStyle>
  );
};