import { useState } from "react";
import { AiOutlineHome, AiOutlineInbox, AiOutlinePhone, AiOutlineMenu } from "react-icons/ai";
import {
  Flex,
  Image,
  IconButton,
  Button,
  Link,
  Icon,
  Avatar,
  Spacer,
  chakra
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


const HeaderStyle = chakra("header", {
    baseStyle: {
        position: "fixed",
        width: "100%",
    },
});

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyle>
    <Flex
      align="center"
      justify="space-between"
      bg="#BEF8CB"
      p={4}
      color="white"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <Image src="img/sacs.png" alt="Logo" boxSize="174px" maxW="100%" height="auto" />
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
        <IconButton
          aria-label="Toggle Menu"
          size="lg"
          mr={2}
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={handleMenuToggle}
        />
      </Flex>
      <Spacer/>
      <Avatar size="lg" name="Foto de Perfil" src="https://joesch.moe/api/v1/random" mr={5}/>
    </Flex>
    </HeaderStyle>
  );
}
