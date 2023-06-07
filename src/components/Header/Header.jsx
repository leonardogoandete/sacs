import React from "react";
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
import { AiOutlineHome, AiOutlineInbox, AiOutlinePhone } from "react-icons/ai";
import { Profile } from "../Menu/Profile";
import ModoColor from "./ChangeColor";

const HeaderStyle = chakra("header", {
  baseStyle: {
    width: "100%",
  },
});

function Header() {
  const isMobile = useBreakpointValue({ base: "base", md: "md" });

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
        {!isMobile || isMobile === "md" ? (
          <Image
            src="img/sacs-v1.png"
            alt="Logo"
            boxSize={isMobile ? "8%" : "100%"}
            maxW="100%"
            height="auto"
            ml={4}
          />
        ) : null}
        <Flex ml="auto" align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link href="/">
              <Button
                mr={4}
                variant="ghost"
                leftIcon={<Icon as={AiOutlineHome} boxSize={5} />}
              >
                Início
              </Button>
            </Link>
            <Link href="/chamados">
              <Button
                mr={4}
                variant="ghost"
                leftIcon={<Icon as={AiOutlineInbox} boxSize={5} />}
              >
                Meus Chamados
              </Button>
            </Link>
            {/* <Link href="/meus-chamados">
              <Button
                variant="ghost"
                leftIcon={<Icon as={AiOutlinePhone} boxSize={5} />}
              >
                Contato
              </Button>
            </Link> */}
          </Flex>
        </Flex>
        {isMobile? (
          <Image
            display={["flex", "flex", "none", "none"]}
            src="img/sacs-v1.png"
            alt="Logo"
            width={100}
            height="auto"
            ml="8"
          />
        ): null}
        <Spacer />
        <ModoColor/>
        <Profile />
      </Flex>
    </HeaderStyle>
  );
}

export default Header;
