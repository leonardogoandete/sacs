import {
    useBreakpointValue,
    Container,
    Box,
    Heading,
    Icon,
    UnorderedList,
    ListItem,
    Flex,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { MenuChamado } from "../chamados/abrirChamado";

export const Home = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    const isLoggedIn = localStorage.getItem('loggedIn');

    return (
        <Container maxW='100%' pr={isMobile ? 6 : 24} pl={isMobile ? 6 : 24}>
            <Box>
                <Heading as="h3" fontSize="2xl" paddingTop={14}>Bem vindo ao SACS</Heading>
                <br />
                <span>
                    De forma a facilitar o atendimento interno no campus Porto Alegre, o SACS (Sistema de Atendimento de Chamados e Suporte),
                    provê uma interface entre diferentes setores do campus e seus respectivos usuários. Neste momento, o sistema é utilizado
                    pelos setores:<br />
                    <br />
                    <UnorderedList pl={0} listStyleType="none">
                        <ListItem>
                            <Flex align="center">
                                <Icon as={BsArrowRight} boxSize={4} mr={2} />
                                <span>DTI: Operações e Sistemas, Redes e Comunicações e Suporte Técnico</span>
                            </Flex>
                        </ListItem>
                        <br />
                        <ListItem>
                            <Flex align="center">
                                <Icon as={BsArrowRight} boxSize={4} mr={2} />
                                <span>DAP: Compras, Licitações e Contratos e Infraestrutura, Manutenção, Projetos e Logística</span>
                            </Flex>
                        </ListItem>
                        <br />
                        <ListItem>
                            <Flex align="center">
                                <Icon as={BsArrowRight} boxSize={4} mr={2} />
                                <span>DDI: CAC/Audiovisual (projetores, som das salas de aula e laboratórios)</span>
                            </Flex>
                        </ListItem>
                    </UnorderedList>

                    <br />
                    Classifique o chamado quanto à sua natureza (incidente ou requisição), receba um número e acompanhe o progresso e as
                    respostas dos atendentes. O sistema permite otimizar a gestão dos chamados, implicando melhoria do controle, organização,
                    distribuição, estatísticas, que permitem a execução de uma política de urgência/importância específicas, proporcionar
                    indicadores de desempenho, bem como prover um histórico de grande parte das requisições e incidentes dos setores relacionados.
                    Para criar um ticket/chamado, é necessário possuir um usuário cadastrado na rede interna do campus. Sistema mantido pela DTI.
                    Em caso de dúvidas, entre em contato com dti@poa.ifrs.edu.br<br />
                </span>
            </Box>
            <br /><br />
            {isLoggedIn ? <MenuChamado /> : ""}
            <br />
        </Container>
    )
}