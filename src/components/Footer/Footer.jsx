import { Box, Flex, Spacer, Image, Center, Text, useBreakpointValue, chakra } from "@chakra-ui/react";

function Footer() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const FooterStyle = chakra("header", {
    baseStyle: {
        width: "100%",
        bg: "#007018"
    },
});

  return (
    <FooterStyle>
    <Box p={4} height={isMobile ? "60px" : "100px"} bottom={0} left={0} right={0} zIndex={1}>
      <Flex alignItems="center" height="100%" flexDirection={isMobile ? "column" : "row"}>
        <Spacer />
        <Center flex="1">
          <Text textAlign={isMobile ? "center" : "left"} fontSize={isMobile ? "10px" : "sm"} color="white">
            &copy; {new Date().getFullYear()} SACS - Sistema de Atendimento a Chamados e Suporte. Todos os direitos reservados.
          </Text>
        </Center>
        <Spacer />
        {!isMobile && (
          <Image src="img/ifrs-poa.png" alt="Logo IFRS POA" boxSize="273px" height="55px" />
        )}
      </Flex>
    </Box>
    </FooterStyle>
  );
}

export default Footer;
