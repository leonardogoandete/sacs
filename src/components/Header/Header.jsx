import { AiOutlineHome, AiOutlineInbox, AiOutlinePhone } from "react-icons/ai";
import {
  Flex,
  Image,
  Button,
  Link,
  Icon,
  Spacer,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MenuLateral } from "../menu/mobile/MenuLateral";
import MyAvatar from "../PerfilAvatar/MyAvatar";

const HeaderStyle = chakra("header", {
  baseStyle: {
    width: "100%",
  },
});

export function Header() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <HeaderStyle>
      <Flex
        align="center"
        justify="space-between"
        //bg="#BEF8CB"
        bg="#007018"
        p={2}
        color="black"
        top={0}
        left={0}
        right={0}
        zIndex={1}
      >
        <Image
          src="img/sacs-v1.png"
          alt="Logo"
          boxSize={isMobile ? "90px" : "174px"}
          maxW="20%"
          height="auto"
          ml={isMobile ? "10px" : "none"}
        />
        <Flex ml="auto" align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link href="/">
              <Button
                to="/teste"
                mr={4}
                variant="ghost"
                leftIcon={<Icon as={AiOutlineHome} boxSize={5} />}
              >
                Início
              </Button>
            </Link>

            <Link href="/chamados">
              <Button
                to="/chamados"
                mr={4}
                variant="ghost"
                leftIcon={<Icon as={AiOutlineInbox} boxSize={5} />}
              >
                Chamados
              </Button>
            </Link>

            <Link href="/contato">
              <Button
                to="/contato"
                variant="ghost"
                leftIcon={<Icon as={AiOutlinePhone} boxSize={5} />}
              >
                Contato
              </Button>
            </Link>
          </Flex>
          <MenuLateral />
        </Flex>
        <Spacer />
        <MyAvatar size={isMobile ? "md" : "lg"} />
      </Flex>
    </HeaderStyle>
  );
}
