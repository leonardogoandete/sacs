import { Box, Flex, SimpleGrid, Heading, useBreakpointValue } from "@chakra-ui/react";
import { CardChamado } from "../Card/CardChamado";

export function Chamado() {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    const cardsData = [
        {
            imageSrc: "img/projetor.png",
            title: "CAC/Audio Visual",
            content: "Questões relativas a projetores multimídia e sistemas de som de salas de aulas, laboratórios e auditórios.",
        },
        {
            imageSrc: "img/sistemas.png",
            title: "TI - Operações e Sistemas",
            content: "Manutenção da página do câmpus, implementação e manutenção de sistemas Acadêmicos e Administrativos e Cadastros em geral.",
        },
        {
            imageSrc: "img/contrato.png",
            title: "Compras, Licitações e Contratos",
            content: "Relacionados com: Coordenadoria de Compras, Licitações e Contratos.",
        },
        {
            imageSrc: "img/wi-fi.png",
            title: "TI - Redes e Comunicações",
            content: "Manutenção da infraestrutura de rede (dados) cabeada e sem-fio do câmpus, Equipamentos e servidores de rede, Serviços de rede.",
        },
        {
            imageSrc: "img/empresa.png",
            title: "Infraestrutura",
            content: "Manutenção relativa à estrutura física e operacional no câmpus de forma geral.",
        },
        {
            imageSrc: "img/atendimento-ao-cliente.png",
            title: "TI - Suporte técnico",
            content: "Instalação e manutenção de equipamentos de informática e Instalação de softwares. ",
        }
        // Adicione mais objetos para criar mais cards
    ];

    return (
        <>
          <Flex justifyContent="center">
            <Box p={4}>
              <Heading as="h3" fontSize={isMobile ? "20px" : "xl"} mb={4} textAlign="center" mt={6}>
                Abertura de Chamado
              </Heading>
              <SimpleGrid columns={[1, 1, 2, 2]} spacing={4} p={4}>
                {cardsData.map((card, index) => (
                  <CardChamado
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    content={card.content}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </>
    );
}
