import { useColorMode,Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ModoColor() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button onClick={toggleColorMode} bg={'none'}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>)
}

export default ModoColor;