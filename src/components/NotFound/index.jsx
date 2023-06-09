import { Image, Box } from '@chakra-ui/react';

export const NotFound = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="80vh"
        >
            <Image
                src="img/img-error.png"
                alt="Erro 404"
                width="600px"
                height="auto"
            />
            <div style={{ fontSize: '10px' }}>
                <a href="https://storyset.com/web">Web illustrations by Storyset</a>
            </div>
        </Box>
    );
}
