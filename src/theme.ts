'use client';
import { createTheme } from '@mui/material/styles';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
    subsets: ['latin'],
});

let theme = createTheme({
    palette: {
        primary: {
            main: '#3F0035',
        },
        secondary: {
            main: '#ED6C02',
        },
    },
    typography: {
        fontFamily: nunito.style.fontFamily,
    },
});

export default theme;
