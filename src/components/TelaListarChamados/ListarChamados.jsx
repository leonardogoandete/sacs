import { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, useBreakpointValue, TableContainer, Heading, Tag, TagLabel } from "@chakra-ui/react";
import ModalListChamados from "./ModalListChamados";


function ListarChamados() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedChamado, setSelectedChamado] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [tableData, setTableData] = useState([]);

    const handleRowClick = (numeroChamado) => {
        setSelectedChamado(numeroChamado);
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "Concluído":
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
          const response = await fetch("http://192.168.0.4:8000/api/chamados");
          const data = await response.json();
          setTableData(data);
        } catch (error) {
          console.error("Erro ao buscar chamados:", error);
        }
      };
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
      const rowsPerPage = 10;
      const pageCount = Math.ceil(tableData.length / rowsPerPage);
    
      const renderTableData = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
    
        return tableData.slice(startIndex, endIndex).map((row, index) => (
          <Tr key={index} onClick={() => handleRowClick(row.numeroChamado)}>
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
    
      const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
      };
    
      const isMobile = useBreakpointValue({ base: true, lg: false });
    
      return (
        <Box p={4}>
          <Heading as="h3" fontSize={isMobile ? "20px" : "xl"} mb={4} textAlign="center" mt={6}>
            Meus Chamados
          </Heading>
          <TableContainer overflowX="auto">
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
              <Tbody>
                {renderTableData()}
              </Tbody>
            </Table>
          </TableContainer>
          {selectedChamado && (
            <ModalListChamados isOpen={isOpen} onClose={handleCloseModal} numeroChamado={selectedChamado} />
          )}
        </Box>
      );
    }

export default ListarChamados;
