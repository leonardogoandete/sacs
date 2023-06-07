import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },
    breakpoints: {
        sm: '440px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1400px',
    },
    fonts: {
        body: "Poppins, sans-serif",
        heading: "Poppins, sans-serif",
    },
});