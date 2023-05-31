import { useState, useEffect } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useBreakpointValue,
  Heading,
  Tag,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import ModalListChamados from "./ModalListChamados";

function ListarChamados() {
  const [selectedChamado, setSelectedChamado] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleRowClick = (id) => {
    setSelectedChamado(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedChamado(null);
    setIsOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Concluido":
        return "green";
      case "Cancelado":
        return "red";
      case "Em andamento":
        return "orange";
      case "Aberto":
        return "blue";
      default:
        return "gray";
    }
  };

  useEffect(() => {
    fetchChamados();
  }, []);

  const fetchChamados = async () => {
    try {
      const response = await fetch("https://647751049233e82dd53b7062.mockapi.io/api/chamados");
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error("Erro ao buscar chamados:", error);
    }
  };

  const renderTableData = () => {
    return tableData.map((row) => (
      <Tr
        key={row.id}
        onClick={() => handleRowClick(row.id)}
        cursor="pointer"
        _hover={{ bg: "gray.100" }}
      >
        <Td>{row.numeroChamado}</Td>
        <Td>{row.dataAbertura}</Td>
        <Td>
          <Tag colorScheme={getStatusColor(row.status)}>
            <TagLabel>{row.status}</TagLabel>
          </Tag>
        </Td>
        <Td>{row.assunto}</Td>
        <Td>{row.departamento}</Td>
      </Tr>
    ));
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });
  const cardBackground = useColorModeValue("#efecec", "#2D3748");

  return (
    <Box p={4}>
      <Heading as="h3" fontSize={isMobile ? "20px" : "xl"} mb={4} textAlign="center" mt={6}>
        Meus Chamados
      </Heading>
      {isMobile ? (
        <Box>
          {tableData.map((chamado) => (
            <Box
              key={chamado.numeroChamado}
              onClick={() => handleRowClick(chamado.numeroChamado)}
              p={4}
              boxShadow="md"
              borderRadius="md"
              bg={cardBackground}
              cursor="pointer"
              _hover={{ boxShadow: "lg" }}
              mb={4}
            >
              <Heading as="h4" size="md" mb={2}>
                #{chamado.numeroChamado}
              </Heading>
              <Tag colorScheme={getStatusColor(chamado.status)}>
                <TagLabel>{chamado.status}</TagLabel>
              </Tag>
              <Box mt={2}>
                <strong>Data de Abertura: </strong>
                {chamado.dataAbertura}
              </Box>
              <Box>
                <strong>Assunto: </strong>
                {chamado.assunto}
              </Box>
              <Box>
                <strong>Departamento: </strong>
                {chamado.departamento}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Número do Chamado</Th>
              <Th>Data de Abertura</Th>
              <Th>Status</Th>
              <Th>Assunto</Th>
              <Th>Departamento</Th>
            </Tr>
          </Thead>
          <Tbody>{renderTableData()}</Tbody>
        </Table>
      )}
      {selectedChamado && <ModalListChamados isOpen={isOpen} onClose={handleCloseModal} id={selectedChamado} />}
    </Box>
  );
}

export default ListarChamados;
