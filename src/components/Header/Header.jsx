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

function Header() {
  const isMobile = useBreakpointValue({ base: "base", md: "md" });
  const isLoggedIn = localStorage.getItem('loggedIn'); 

  return (
    <HeaderStyle>
      <Flex
        align="center"
        justify="space-between"
        bg="#007018"
        p={2}
        color="black"
        top={0}
        left={0}
        right={0}
        zIndex={1}
      >
        {(!isMobile || isMobile === "md") && (
          <Image
            src="img/sacs-v1.png"
            alt="Logo"
            boxSize={"8%"}
            maxW="100%"
            height="auto"
            ml={4}
          />
        )}
        <Flex ml="auto" align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link href="/">
              <Button
                to="/"
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
                Meus Chamados
              </Button>
            </Link>

            <Link href="/meus-chamados">
              <Button
                to="/meus-chamados"
                variant="ghost"
                leftIcon={<Icon as={AiOutlinePhone} boxSize={5} />}
              >
                Contato
              </Button>
            </Link>
          </Flex>
          <MenuLateral />
        </Flex>
        {isMobile && (
          <Image
            display={["flex", "flex", "none", "none"]}
            src="img/sacs-v1.png"
            alt="Logo"
            boxSize={isMobile ? "90px" : "174px"}
            maxW="100%"
            height="auto"
            ml="0"
          />
        )}
        <Spacer />
        {isLoggedIn && <MyAvatar size={isMobile ? "md" : "lg"} />}
      </Flex>
    </HeaderStyle>
  );
}

export default Header;
