import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Paginator = ({ pageCount, onPageChange, currentPage }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 0; i < pageCount; i++) {
            pageNumbers.push(
                <Button
                    key={i}
                    size="sm"
                    variant="ghost"
                    onClick={() => onPageChange({ selected: i })}
                    color={currentPage === i ? "#007018" : 'gray'}
                    _hover={{ bg: 'gray.200' }}
                >
                    {i + 1}
                </Button>
            );
        }
        return pageNumbers;
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
            <Button
                mr={4}
                size="sm"
                variant="ghost"
                onClick={() => onPageChange({ selected: currentPage - 1 })}
                isDisabled={currentPage === 0}
                leftIcon={<ChevronLeftIcon />}
                _hover={{ bg: 'gray.200' }}
                _disabled={{ opacity: 0.5 }}
            >
                Anterior
            </Button>
            {renderPageNumbers()}
            <Button
                ml={4}
                size="sm"
                variant="ghost"
                onClick={() => onPageChange({ selected: currentPage + 1 })}
                isDisabled={currentPage === pageCount - 1}
                rightIcon={<ChevronRightIcon />}
                _hover={{ bg: 'gray.200' }}
                _disabled={{ opacity: 0.5 }}
            >
                Próximo
            </Button>
        </Box>
    );
};

export default Paginator;
