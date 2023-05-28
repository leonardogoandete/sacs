import { Box, Flex, Spacer, Image, Center, Text, useBreakpointValue, chakra } from "@chakra-ui/react";

function Footer() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const FooterStyle = chakra("header", {
    baseStyle: {
        position: "fixed",
        width: "100%",
        bg: "white",
    },
});

  return (
    <FooterStyle>
    <Box bg="gray.200" p={4} height="110px" position="fixed" bottom={0} left={0} right={0} zIndex={1}>
      <Flex alignItems="center" height="100%" flexDirection={isMobile ? "column" : "row"}>
        <Spacer />
        <Center flex="1">
          <Text textAlign={isMobile ? "center" : "left"} fontSize="sm">
            &copy; {new Date().getFullYear()} SACS - Sistema de Atendimento a Chamados e Suporte. Todos os direitos reservados.
          </Text>
        </Center>
        <Spacer />
        {!isMobile && (
          <Image src="/img/ifrs-poa.png" alt="Logo" boxSize="273px" height="55px" />
        )}
      </Flex>
    </Box>
    </FooterStyle>
  );
}

export default Footer;
